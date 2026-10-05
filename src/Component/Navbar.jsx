import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <h2>NEXORA</h2>
                <span>Movies</span>
            </div>

            {/* Navigation Links */}
            <div className="links">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/Movies"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Movies
                </NavLink>

                <NavLink
                    to="/Services"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Services
                </NavLink>

                <NavLink
                    to="/MyBookings"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    My Bookings
                </NavLink>

                <NavLink
                    to="/About"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    About
                </NavLink>
            </div>

            {/* Login Button */}
            <div className="nav-login">
                <NavLink to="/Login">Login</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;

