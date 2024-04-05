import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import Register from './pages/Register'
import { productType } from './interfaces/Product'
import { useEffect, useState } from 'react'
import instance from './apis'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import { createProduct } from './apis/product'
import ProductEdit from './pages/admin/ProductEdit'


function App() {
  const [products, setProducts] = useState<productType[]>([])
  const navigate = useNavigate()
    useEffect(() => {
      const getProducts = async () => { 
        try {
          const { data } = await instance.get('/products')
        console.log(data)
        setProducts(data)
        } catch (error) {
          console.log(error)
        }
      }
      getProducts()
    }, [])
    const handleAdd = (product: productType) => {
      (async () => {
        const data = await createProduct(product)
        setProducts([...products, data])
        navigate('/admin')
      })()
    }
    const handleEdit = (product: productType) => {
      ;(async () => {
        const { data } = await instance.put(`/products/${product.id}`, product)
        setProducts(products.map((item) => (item.id === data.id ? data : item)))
        navigate('/admin')
      })()
    }
    return (
    <>
    <Header />
    <Routes>
      <Route path='/'>
          <Route index element={<Home products={products} />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Route>
      <Route path='/admin'>
          <Route index element={<Dashboard products={products} />} />
          <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
          <Route path='/admin/edit/:id' element={<ProductEdit onEdit={handleEdit} />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App