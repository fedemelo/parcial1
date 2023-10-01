import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { IntlProvider } from 'react-intl';
import localeEsMessages from "./local/es";
import localeEnMessages from "./local/en";
import localeDeMessages from "./local/de";

import './styles/App.css';

const App = () => {
    const messages = navigator.language.startsWith('es') ? localeEsMessages :
        navigator.language.startsWith('de') ? localeDeMessages : localeEnMessages;

    return (
        <Container id="screen">
            <IntlProvider
                locale={navigator.language ? navigator.language : "en-US"}
                messages={messages}
            >
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </IntlProvider>
        </Container>
    );
};

export default App;