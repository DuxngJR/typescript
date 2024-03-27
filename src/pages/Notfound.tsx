import { Link } from "react-router-dom"

const Notfound = () => {
    return (
      <div>
        <h1>404</h1>
        <h2>Oh, Not found!</h2>
        <Link to='/'>Go to back home</Link>
      </div>
    )
  }
  
  export default Notfound