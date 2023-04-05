import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbarLogo">My Store</Link>
      <ul className="navbarLinks">
        <li><Link to="/basket" className="navbarLink">Basket</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;