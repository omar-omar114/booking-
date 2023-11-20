import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking</span>
        <div className="navItems">
          <button className="navButton">Registre</button>
          <button className="navButton">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
