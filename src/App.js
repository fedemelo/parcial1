import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;