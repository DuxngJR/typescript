import instance from '@/apis'
import { productType } from '@/interfaces/Product'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {id} = useParams()
    const [product, setProducts] = useState<productType | null>(null)
    useEffect(() => {
      const getProducts = async () => {
        const { data } = await instance.get(`/products/${id}`)
        setProducts(data)
      }
      getProducts()
    }, [])
  return (
    <div>
      <h1>Chi tiet san pham</h1>
        <div key={product?.id}>
          <img src={product?.thumbnail} alt={product?.title} />
          <h2>{product?.title}</h2>
          <p>{product?.description}</p>
          <p>{product?.price}</p>
          <p>{product?.discountPercentage}</p>
          <p>{product?.rating}</p>
          <p>{product?.stock}</p>
          <p>{product?.brand}</p>
          <p>{product?.category}</p>
        </div>
     
    </div>
  )
}

export default Product