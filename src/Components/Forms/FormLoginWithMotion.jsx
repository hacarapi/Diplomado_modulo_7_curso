import { useState, useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { setUsername, setEmail } from "../../store/features/Form/FormSlice.js";

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({titleForm}) => {
    const dispatch = useDispatch();
    const FormState = useSelector((state) => state.form);
    const { formData, handleChange, resetForm, setFormData  } = useForm(FormState);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("success");
    const [showPassword, setShowPassword] = useState(false);
    const initPassword = useSelector((state) => state.form.password); 

    useEffect(() => {
        setFormData({ ...FormState });
    }, [FormState, setFormData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initPassword === formData.password) {
            dispatch(setUsername(formData.username));
            dispatch(setEmail(formData.email));
            console.log('datos del formulario', formData);
            setModalType("success");
            setShowModal(true);
        }
        else {
            console.log('password ingresado', formData.password);
            console.log('password de inicio', passwordinicio);
            dispatch(setUsername(''));
            dispatch(setEmail(''));
            setModalType("warning");
            setShowModal(true);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword ((prev)=> !prev); // Cambio de visibilidad del estato
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
        resetForm();  // Resetear el formulario al cerrar el modal
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
                message={modalType === "success" ? 'Login Success ' + formData.username : "Error: Username/Password incorrectos"}
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
                                value={formData.module}
                                readOnly
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
                                value={formData.username}
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
                                value={formData.email}
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
                                value={formData.password}
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