import { Link } from "react-router-dom";

export default function Header() {
   return (
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/shopping-cart"> Shopping-cart</Link>
        <Link to="/history">History</Link>
      </nav>
   )
};
