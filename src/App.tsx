import { Route, Routes } from 'react-router-dom'
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


function App() {
  const [products, setProducts] = useState<productType[]>([])
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
          <Route path='/admin/add' element={<ProductAdd />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App