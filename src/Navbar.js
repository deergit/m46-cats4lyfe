import './Navbar.css';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h1 className="navbarLogo">My Store</h1>
      <div className="navbarLinks">
        <button className="basketButton" onClick={props.handleShowBasket}>Basket</button>
      </div>
    </nav>
  );
}

export default Navbar;