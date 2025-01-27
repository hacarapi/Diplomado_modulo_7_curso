import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({titleForm}) => {
    const { formData, handleChange, resetForm } = useForm({
        username: "",
        email: "",
        password: "",
    });

    const { module, username, email, password } = useSelector((state) => state.form);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("success");
    const [showPassword, setShowPassword] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid =
            username === "hacarapi" &&
            email === "huber.acarapi@gmail.com" &&
            password === "mod7USIP-HUBER";
        //Modal correcto
        if (isValid) {
            setModalType("success");
            setShowModal(true);
            console.log("¡Logeado hacarapi!");
        //Modal Incorrecto
        } else {
            setModalType("error");
            setShowModal(true);
            console.log("Error: Username/Password incorrectos");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword ((prev)=> !prev); // Cambio de visibilidad del estato
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo
                visible={showModal}
                message={modalType === "success" ? "¡Logeado hacarapi!" : "Error: Username/Password incorrectos"}
                type={modalType}
                onClose={onCloseModalInfo}
            />
            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{titleForm}</h3>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Module:
                            <input
                                type="text"
                                name="module"
                                value={module}
                                disabled
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100 }} 
                            animate={{ y: 0 }} 
                            transition={{ duration: 0.5 }}>
                    <div>
                        <label style={{ marginLeft: "10px" }}>
                            Password:
                            <input
                                type={showPassword ? "text" : "password"} // Cambio de viualizacion del password
                                name="password"
                                value={password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                style={{
                                position: "absolute",
                                backgroundColor: "blue",
                                color: "white",
                                cursor: "pointer",
                                borderRadius: "5px",
                                border: "none",
                                padding: "10px",
                                marginLeft: "10px",
                                marginRight: "235px",
                                marginTop: "0px",
                                }}
                            >
                                {showPassword ? "Ocultar" : "Mostrar"}
                            </button>
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button type="submit">Enviar</button>
                </motion.div>
            </form>
        </motion.div>
    );
};

export default FormWithMotionAndHook;