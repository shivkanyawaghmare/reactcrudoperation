import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function AddNewUser({ showModal, handleClose, handleSubmit, handleInputChange, newUser }) {
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">Id</label>
                        <input type="number" className="form-control" id="id" name="id" value={newUser.id} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={newUser.title} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="completed" className="form-label">Completed</label>
                        <input type="text" className="form-control" id="completed" name="completed" value={newUser.completed} onChange={handleInputChange} required />
                    </div>
                    <Button type="submit" className="btn btn-primary my-5">Add User</Button>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default AddNewUser;
