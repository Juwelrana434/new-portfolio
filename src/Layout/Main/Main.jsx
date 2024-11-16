import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer/Footer.js'
const Main = () => {
  return (
    <div>
      <Navbar />
      
        <Outlet />
      
      <Footer />
    </div>
  )
}

export default Main
