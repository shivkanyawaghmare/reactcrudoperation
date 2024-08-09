import React, { useContext, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { CrudContext } from './CrudContext';
import AddNewUser from './AddNewUser';
import EditUser from './EditUser';

function CrudApp() {
    const { myData, isError, addApiData, updateApiData, deleteApiData } = useContext(CrudContext);
    const [newUser, setNewUser] = useState({ id: '', title: '', userId: '', completed: '' });
    const [editUser, setEditUser] = useState({ id: '', title: '', userId: '', completed: '' });
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleInputChange = (e, setUser) => {
        setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        addApiData(newUser);
        setNewUser({ id: '', title: '', userId: '', completed: '' });
        setShowAddModal(false);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateApiData(editUser.id, editUser);
        setShowEditModal(false);
    };

    const handleEditClick = (user) => {
        setEditUser(user);
        setShowEditModal(true);
    };

    return (
        <>
            <div className='container m-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1 className='mb-5'>CRUD Operations</h1>
                    <Button onClick={() => setShowAddModal(true)} className='btn btn-primary mx-4 px-5'>Add User</Button>
                </div>
                {isError && <h2>{isError}</h2>}
                <div className='grid'>
                    {myData.map((user) => {
                        const { id, title, userId, completed } = user;
                        return (
                            <div className='card-1' key={id}>
                                <div className='card-content1 w-100 m-2'>
                                    <div className='text-start d-flex'>
                                        <h4>{id}</h4>
                                    </div>
                                    <p className='ms-5'>{title}</p>
                                </div>
                                <div className='w-auto card-content2 m-2 p-1'>
                                    <button className='btn btn-success me-2' onClick={() => handleEditClick(user)}>Edit</button>
                                    <button className='btn btn-danger ms-2' onClick={() => deleteApiData(id)}>Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <AddNewUser
                showModal={showAddModal}
                handleClose={() => setShowAddModal(false)}
                handleSubmit={handleAddSubmit}
                handleInputChange={(e) => handleInputChange(e, setNewUser)}
                newUser={newUser}
            />

            <EditUser
                showModal={showEditModal}
                handleClose={() => setShowEditModal(false)}
                handleSubmit={handleEditSubmit}
                handleInputChange={(e) => handleInputChange(e, setEditUser)}
                editUser={editUser}
            />
        </>
    );
}

export default CrudApp;
