import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'

export default function Footer() {
    return <Container>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Inter&family=Nunito:wght@300;400&family=Open+Sans:wght@300;400&family=Poppins:wght@300;500&family=Space+Grotesk&display=swap');
        </style>
        <p id="footer" className="text-center">Contact us: +57 3102105253 - info@elaromagico.com - @elaromagico</p>
    </Container>
}