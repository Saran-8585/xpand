import"../sample.css";


function NavBar() {
    return (
        <div className="nav-bar">
            <div id="logo">
                <img id="logo-img" src="images/logo-nobg.png" alt="Logo" />
            </div>
            <div id="brand-name">
                <h1>XPAND</h1>
            </div>
            <div>
                <nav className="nav-links">
                    <a href="#home" className="nav-link">Home </a>
                    <a href="#services" className="nav-link">Services </a>
                    <a href="#about" className="nav-link">About </a>
                    <a href="#contact" className="nav-link">Contact </a>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;