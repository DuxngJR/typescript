import instance from '@/apis'
import { productType } from '@/interfaces/Product'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

type Props = {
  onEdit: (product: productType) => void
}

const productSchema = Joi.object({
  title: Joi.string().required().min(3),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, '')
})

const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<productType | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<productType>({
    resolver: joiResolver(productSchema)
  })

  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    })()
  }, [])

  const onSubmit = (product: productType) => {
    onEdit({ ...product, id })
  }
  // if(!product) {
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Update product</h1>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            className='form-control'
            type='text'
            {...register('title', { required: true, minLength: 3, maxLength: 255 })}
            defaultValue={product?.title}
          />
          {errors.title && <div className='text-danger'>{errors.title.message}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Title</label>
          <input
            className='form-control'
            type='number'
            {...register('price', { required: true, minLength: 3, maxLength: 255 })}
            defaultValue={product?.price}
          />
          {errors.price && <div className='text-danger'>{errors.price.message}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            className='form-control'
            type='text'
            {...register('description')}
            defaultValue={product?.description}
          />
        </div>
        <div className='form-group'>
        <label htmlFor='images'>Images</label>
        <input
            className='form-control'
            type='text'
            {...register('images')} // Thay vì sử dụng input type file, sử dụng input type text
            defaultValue={product?.images}
          />
          {errors.images && <div className='text-danger'>{errors.images.message}</div>}
        </div>
        <button className='btn btn-primary w-100'>Submit</button>
      </form>
    </div>
  )
}

export default ProductEdit