import "./CartWidget.css"
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to="/cart" style={{color: "black"}}>
            <Badge badgeContent={5} color="secondary">
                <ShoppingCartIcon sx={{ color: "#FFE3ED" }}/>
            </Badge>
        </Link>
    );
};

export default CartWidget;
