
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h2>NEXORA</h2>
            </div>

                <div className="links">
                   <NavLink to="/">Home</NavLink>
                   <NavLink to="/Movies">Movies</NavLink>
                   <NavLink to="/Services">Services</NavLink>
                   <NavLink to="/MyBookings">My Bookings</NavLink>
                   <NavLink to="/About">About</NavLink>
                </div>
        </nav>
    );
}

export default Navbar;