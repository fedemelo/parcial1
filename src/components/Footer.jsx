import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'

export default function Footer() {
    return <Container>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Inter:wght@400;700;900&family=Nunito:wght@300;400&family=Open+Sans:wght@300;400&family=Poppins:wght@300;500&family=Space+Grotesk&display=swap');
        </style>
        <p id="footer" className="text-center"><FormattedMessage id="contactUs" />: <FormattedMessage id="phoneNum" /> - <FormattedMessage id="email" /> - <FormattedMessage id="insta" /></p>
    </Container>
}