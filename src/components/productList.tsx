import instance from '@/apis'
import { productType } from '@/interfaces/Product'
import { useEffect, useState } from 'react'

const ProductList = () => {
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
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.discountPercentage}</p>
          <p>{product.rating}</p>
          <p>{product.stock}</p>
          <p>{product.brand}</p>
          <p>{product.category}</p>
          <img src={product.thumbnail} alt={product.title} />
        </div>
      ))}
    </div>
  )
}

export default ProductList