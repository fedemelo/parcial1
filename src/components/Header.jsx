import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeImg from '../assets/CoffeeHeader.png'
import '../styles/Header.css'
import { Container } from 'react-bootstrap';

export default function Header() {
    return <Container id="headerContainer">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Nunito:wght@400;500&family=Open+Sans:wght@300;400&family=Poppins:wght@300;500&family=Space+Grotesk&display=swap');
        </style>
        <h1 id="headerText"><strong>El aroma mágico</strong></h1>
        <hr />
        <img id="headerImg" src={coffeImg} alt="Coffe" />
        <hr />
    </Container>
}
