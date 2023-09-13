
import "./Navbar.css"
import { Link, Outlet } from "react-router-dom";
import Button from '@mui/material/Button';
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";

const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="containerBrand">
        <Link to="/"><img src="https://megliosport.com.ar/wp-content/uploads/2017/07/SOCCER-Convertido-300x281.png" alt="Camisetas Futbol" /></Link>
        </div>
          
        <div className="containerCategories">
          <Link to="/"><Button sx={{ color: "#FFF" }}>Todos</Button></Link>
          <Link to="/brandName/Adidas"><Button sx={{ color: "#FFF" }}>Adidas</Button></Link>
          <Link to="/brandName/Nike"><Button sx={{ color: "#FFF" }}>Nike</Button></Link>
          <Link to="/brandName/Puma"><Button sx={{ color: "#FFF" }}>Puma</Button></Link>
        </div>
      <CartWidgetContainer />
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar