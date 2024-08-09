import React from 'react';
import CrudApp from './components/CrudApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CrudProvider } from './components/CrudContext';

function App() {
    return (
        <CrudProvider>
            <CrudApp />
        </CrudProvider>
    );
}

export default App;
