import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/form/formSlice';

const LogoutModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(true); 

    const handleLogout = () => {
        dispatch(logout());
        navigate('/Login');
        setShowModal(false); 
    };

    const closeModal = () => {
        setShowModal(false);
        navigate('/');
    };

    return (
        <>
            {showModal && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <h3>Estás seguro que quieres cerrar sesión?</h3>
                        
                        <div style={styles.modalActions}>
                            <button onClick={handleLogout} style={styles.confirmButton}>
                                Presiona para salir!!!!
                            </button>
                            <button onClick={closeModal} style={styles.cancelButton}>
                                X
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
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
    },
    modalActions: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    confirmButton: {
        padding: '10px 20px',
        backgroundColor: '#52c41a',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    cancelButton: {
        padding: '10px 20px',
        backgroundColor: '#ff4d4f',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default LogoutModal;