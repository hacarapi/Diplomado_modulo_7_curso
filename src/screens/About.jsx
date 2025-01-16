import { useSelector } from 'react-redux'
import { useState } from 'react';

const About = () => {
    const initialValue = useSelector((state) => state.product.initialValue)
    // Los Hooks en react son funcioes ya definidas
    // los hooks siempre tienen el prefijo use
    // hook useState, useEffect, useContext, useRef, useTransition
    // es posible crear nuestos propios hooks

    // el hook useState permite manejar variables de estado para el componente
    // redux toolkit permite manejar variables de estado globalmente

    //const [nameComponent] = useState('About');
    const [nameComponent, setNameComponent] = useState('About'); // para cambar el nombre del componente
    // let nameComponent = 'About';
    // nameComponent = 'HomeAbout'; // para variables

    return (
        <>
            <div>
                <h2><strong>Initial value: {initialValue}</strong></h2>
            </div>
            <p>Component name: {nameComponent}</p>
            <button onClick={() => {setNameComponent('Curso de React!!!!')}}>Press</button>
        </>
    );
}

export default About;