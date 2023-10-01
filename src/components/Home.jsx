import React from "react";
import { Row, Col, Card, Image, Container } from 'react-bootstrap';
import { FormattedMessage, FormattedDate } from "react-intl";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

export default function Home() {

    const [selectedCoffee, setSelectedCoffee] = React.useState(null)
    const [coffees, setCoffees] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3001/cafes')
            .then(response => response.json())
            .then(data => setCoffees(data))
    }, [])

    const CoffeeTable = () => {

        return <table className="table" >
            <thead className="table-dark" id="tableHead">
                <tr>
                    <th className="align-middle">#</th>
                    <th className="align-middle"> <FormattedMessage id="name" /></th>
                    <th className="align-middle"><FormattedMessage id="type" /></th>
                    <th className="align-middle"><FormattedMessage id="region" /></th>
                </tr>
            </thead>
            <tbody>
                {coffees.map((coffee, index) => (
                    <tr key={index} onClick={() => {
                        console.log(coffee)
                        setSelectedCoffee(coffee)
                    }}>
                        <td className="align-middle"><strong>{coffee.id}</strong></td>
                        <td className="align-middle">{coffee.nombre}</td>
                        <td className="align-middle">{coffee.tipo}</td>
                        <td className="align-middle">{coffee.region}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    }


    const CoffeeDetail = () => {

        const [coffee, setCoffee] = React.useState(null)

        React.useEffect(() => {
            fetch(`http://localhost:3001/cafes/${selectedCoffee.id}`)
                .then(response => response.json())
                .then(data => setCoffee(data))
                .catch(error => console.log(error))
        }, [])

        if (!coffee) {
            return null
        }

        return < Card id="coffeeCard">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Inter:wght@400;700;900&family=Nunito:wght@300;400&family=Open+Sans:wght@300;400&family=Poppins:wght@300;500&family=Space+Grotesk&display=swap');
            </style>
            <Card.Body id="coffeeBody">
                <Card.Title id="coffeeTitle">{coffee.nombre}</Card.Title>
                <Card.Subtitle id="coffeeDate">
                    {coffee.fecha_cultivo?<FormattedDate
                        value={new Date(coffee.fecha_cultivo)}
                        year='numeric'
                        month='numeric'
                        day='numeric'
                    />:"⠀"}
                </Card.Subtitle>
                <Container id="coffeeImageContainer">
                    <Image id="coffeeImage" src={coffee.imagen} alt={`Imagen del café ${coffee.nombre}`} />
                </Container>
                <Card.Text id="coffeeNotes"><FormattedMessage id="notes" /><br />{coffee.notas} </Card.Text>
                <Card.Text id="coffeeAltitude"><FormattedMessage id="altitudeMessage" /><br />{coffee.altura} <FormattedMessage id="altitudeUnit" /></Card.Text>
            </Card.Body>
        </Card >
    }

    return <Row id="homeRow">
        <Col md={8}>
            <CoffeeTable id="coffeeTable" />
        </Col>
        <Col md={4}>
            {selectedCoffee ? <CoffeeDetail /> : null}
        </Col>
    </Row>
}

