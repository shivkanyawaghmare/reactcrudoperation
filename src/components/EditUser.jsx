import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function EditUser({ showModal, handleClose, handleSubmit, handleInputChange, editUser }) {
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">Id</label>
                        <input type="number" className="form-control" id="id" name="id" value={editUser.id} onChange={handleInputChange} required disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={editUser.title} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="completed" className="form-label">Completed</label>
                        <input type="text" className="form-control" id="completed" name="completed" value={editUser.completed} onChange={handleInputChange} required />
                    </div>
                    <Button type="submit" className="btn btn-primary my-5">Update User</Button>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default EditUser;
