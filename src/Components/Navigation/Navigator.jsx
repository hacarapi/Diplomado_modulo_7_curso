import { Link } from "react-router";
import { useSelector } from "react-redux";

const Navigator = () => {
    const {username, email}= useSelector (state => state.form);
        return (
            <nav className="navbar">
            <Link to="/" className="nav-link">LandingPage</Link>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <span to="/" className="nav-username"> Bienvenido {username} | {email}</span>
            <Link to="/logout" className="nav-link">Logout</Link>
        </nav>
    );
}
export default Navigator;