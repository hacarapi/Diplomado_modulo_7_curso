import OpenLink from "../Components/Core/OpenLink.jsx";
import Body from '../Components/Home/Body.jsx';
import Footer from '../Components/Home/Footer.jsx';

import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import githubLogo from '../assets/GitHub.svg';

import { useSelector } from 'react-redux'


const Home = () =>{
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            <div><h2><strong>Count value: {count}</strong></h2></div>
            <div>
            <OpenLink redirectURL="https://vite.dev" logoImage={viteLogo} />
            <OpenLink redirectURL="https://react.dev" logoImage={reactLogo} />
            <OpenLink redirectURL="https://github.com/hacarapi/Diplomado_modulo_7_curso" logoImage={githubLogo} />
            </div>            
            <Body />
            <Footer />
        </div>
    );
};

export default Home;