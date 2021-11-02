import React from 'react';
import Modal from 'react-bootstrap/Modal';

const Information = ({show, onHide, title, body}) => (
    <Modal show={show} onHide={onHide} backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
            <div>
                <h3 className="text-center mt-4 mb-3">{title}</h3>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <h5 className="text-center mb-4">{body}</h5>
                <div className="text-center">
                    <button onClick={onHide} className="btn-afront">OK</button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
)

export default Information;