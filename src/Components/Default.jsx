import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Default = () => {
    const [count, setCount] = useState(0)
    return(
       <div>
            
            <h1>Vite + React</h1>

            <h2>DIPLIMADO FULL STACK</h2>
            <h3>MOD 7: CURSO DE REACT</h3>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
                <p>
                Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
       </div>
    )
};

export default Default;