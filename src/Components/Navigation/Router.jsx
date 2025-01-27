import LandingPage from "../../screens/LandingPage.jsx";
import Home from "../../screens/Home.jsx";
import Product from "../../screens/Product.jsx";
import About from "../../screens/About.jsx";
import Think from "../../screens/Think.jsx";
import Login from "../../screens/Login.jsx";
import Counter from "../Counter/Counter.jsx";
import Logout from '../Forms/Logout.jsx';

import {Routes, Route} from "react-router";

const Router = () =>{
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="product" element={<Product />} />
            <Route path="think" element={<Think />} />
            <Route path="counter" element={<Counter />} />
            <Route path="about" element={<About />} />
            <Route path="logout" element={<Logout />} />
        </Routes>
    );
}
export default Router;