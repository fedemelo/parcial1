import React from 'react'
import { Container } from 'react-bootstrap';
import { FormattedMessage } from "react-intl";
import coffeImg from '../assets/CoffeeHeader.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'

export default function Header() {
    return <Container id="headerContainer">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Nunito:wght@400;500&family=Open+Sans:wght@300;400&family=Poppins:wght@300;500&family=Space+Grotesk&display=swap');
        </style>
        <h1 id="headerText"><strong><FormattedMessage id="pageTitle" /></strong></h1>
        <hr />
        <img id="headerImg" src={coffeImg} alt="Coffe" />
        <hr />
    </Container>
}
