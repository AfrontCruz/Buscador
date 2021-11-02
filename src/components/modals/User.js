import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CardUserFull from '../others/CardUserFull';

const User = ({show, onHide, title, user}) => (
    <Modal show={show} onHide={onHide} backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
            <div className="d-flex flex-column justify-content-center">
                <CardUserFull item={user} />
                <div className="text-center">
                    <button onClick={onHide} className="btn-afront">Cerrar</button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
)

export default User;