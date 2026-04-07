import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {CartContext} from "./utils/CartContext";

export const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="heading">
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL} />
      </div>

      <div className="nav-container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/cart">
              Cart 🛒 {cart.length}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};