import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetForm } from "../../store/features/Form/FormSlice";

const LogoutModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(true);

    const handleLogout = () => {
        dispatch(resetForm());
        navigate("/Login");
        setShowModal(false);
    };

    const closeModal = () => {
        setShowModal(false);
        navigate("/");
    };

    return (
        <>
            {showModal && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <button
                            onClick={closeModal}
                            style={styles.closeButton}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h3 style={styles.modalHeader}>
                            ¿Estás seguro que quieres cerrar sesión?
                        </h3>
                        <div style={styles.modalActions}>
                            <button onClick={handleLogout} style={styles.confirmButton}>
                                Presiona para salir
                            </button>
                            <button onClick={closeModal} style={styles.cancelButton}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: "white",
        color: "#000",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        width: "100%",
        position: "relative",
    },
    closeButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "none",
        border: "none",
        fontSize: "20px",
        cursor: "pointer",
        color: "#888",
    },
    modalHeader: {
        fontSize: "18px",
        marginBottom: "20px",
    },
    modalActions: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-around",
    },
    confirmButton: {
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s ease",
    },
    cancelButton: {
        padding: "10px 20px",
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s ease",
    },
};

// Hover effects for buttons
styles.confirmButton[":hover"] = {
    backgroundColor: "#218838",
};
styles.cancelButton[":hover"] = {
    backgroundColor: "#c82333",
};

export default LogoutModal;
