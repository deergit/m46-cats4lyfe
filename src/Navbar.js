import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbarLogo">My Store</h1>
            <div className="navbarLinks">
                <button className="basketButton">Basket</button>
            </div>
        </nav>
    );
}

export default Navbar;