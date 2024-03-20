import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import Register from './pages/Register'

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop/:id" element={<ProductDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App