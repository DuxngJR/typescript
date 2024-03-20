// import React from 'react'
import Banner from '@/components/banner'
import Product from '@/components/product'
// import ProductList from '@/components/productList'

type Props = {}

const Home = (props:Props) => {
  return (
    <div>
      <Banner />
      <Product />
      {/* <ProductList /> */}
    </div>
  )
}

export default Home