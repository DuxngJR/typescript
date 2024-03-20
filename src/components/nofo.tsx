import { NavLink } from "react-router-dom";
import "@/css/header.css"
function FillExample() {
  return (
    <div className="dau">
          <nav className="nav" >
            <ul>
              <li><NavLink to="/" className="nav-NavLink">Home</NavLink></li>
              <li><NavLink to="/productDetail" className="nav-NavLink">ProductDetail</NavLink></li>
              <li><NavLink to="/login" className="nav-NavLink">Login</NavLink></li>
              <li><NavLink to="/register" className="nav-NavLink">Register</NavLink></li>
            </ul>
          </nav>
    </div>
  );
}

export default FillExample;