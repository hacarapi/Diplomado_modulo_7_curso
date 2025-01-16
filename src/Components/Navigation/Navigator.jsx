import {Link} from "react-router";

const Navigator = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>                    {/* http://localhost:5173/  */}
            <Link to="/counter" className="nav-link">Counter</Link>          {/* http://localhost:5173/counter  */}
            <Link to="/think" className="nav-link">Think</Link>              {/* http://localhost:5173/think  */}
            <Link to="/products" className="nav-link">Product</Link>         {/* http://localhost:5173/products  */}
            <Link to="/about" className="nav-link">About</Link>              {/* http://localhost:5173/about  */}
        </nav>
    );
}

export default Navigator;