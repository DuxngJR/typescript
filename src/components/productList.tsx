// import instance from "@/apis"
// import { productType } from "@/interfaces/Product"
// import { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"

// const ProductList = () => {
//   const [products, setProducts] = useState<productType[]>([])
//     useEffect(() => {
//       const getProducts = async () => { 
//         try {
//           const { data } = await instance.get('/products')
//         console.log(data)
//         setProducts(data)
//         } catch (error) {
//           console.log(error)
//         }
//       }
//       getProducts()
//     }, [])
//     return (
//     <div>
//       <h2>Product List</h2>
//       <div style={{display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'space-around'}}>
//       {products.map((product) => (
//         <div key={product.id}>
//             <div className="card" style={{width: 300}}>
//               <img src={product.thumbnail} className="card-img-top img-thumbnail w-200px" alt={product.title}></img>
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.price}</p>
//                 <Link to={`shop/${product.id}`} className="btn btn-primary">xem chi tiet san pham</Link>
//               </div>
//           </div>
//         </div>
//         ))}
//     </div>
//     </div>
//    ) 
//   }
//   export default ProductList