import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './styles/App.css';

const App = () => {
    return (
        <Container id="screen">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </Container>
    );
};

export default App;