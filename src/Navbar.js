import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navLogo">
        <img className="navLogoImg" src="./images/cat.png" alt="cats 4 lyfe logo"></img>
        <h1 className="navLogoText">Cats 4 Lyfe</h1>
      </div>
      <div className="navbarLinks">
        <button className="basketButton">Basket</button>
      </div>
    </nav>
  );
}

export default Navbar;