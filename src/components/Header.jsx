import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeImg from '../assets/CoffeeHeader.png'
import '../styles/Header.css'

export default function Header() {
    return <div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Nunito:wght@400;500&family=Open+Sans:wght@300;400&family=Poppins:wght@300;500&family=Space+Grotesk&display=swap');
        </style>
        <h1 id="aroma">El aroma mágico</h1>
        <img src={coffeImg} alt="Coffe" />
    </div>
}
