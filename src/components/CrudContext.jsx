import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState('');

    const getApiData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setMyData(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    const addApiData = async (newItem) => {
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos", newItem);
            setMyData(prevData => [...prevData, res.data]);
        } catch (error) {
            setIsError(error.message);
        }
    };

    const updateApiData = async (id, updatedItem) => {
        try {
            await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedItem);
            setMyData(prevData => prevData.map(item => item.id === id ? updatedItem : item));
        } catch (error) {
            setIsError(error.message);
        }
    };

    const deleteApiData = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            setMyData(prevData => prevData.filter(item => item.id !== id));
        } catch (error) {
            setIsError(error.message);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <CrudContext.Provider value={{
            myData, isError, addApiData, updateApiData, deleteApiData
        }}>
            {children}
        </CrudContext.Provider>
    );
};


