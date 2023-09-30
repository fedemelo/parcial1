import React from "react";
import { Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

export default function Home() {

    const [coffee, setCoffee] = React.useState(null)

    const coffees = [
        {
            name: "Café con leche",
            type: "Latte",
            region: "Colombia",
            date: "2023-08-02",
            altitude: 1500,
            notes: "Sabor dulce y cremoso",
        },
        {
            name: "Capuchino",
            type: "Capuccino",
            region: "Italia",
            date: "2023-07-20",
            altitude: 1000,
            notes: "Sabor intenso y cremoso",
        },
        {
            name: "Mocha",
            type: "Mocha",
            region: "México",
            date: "2023-06-15",
            altitude: 1200,
            notes: "Sabor chocolateado y especiado",
        },
        {
            name: "Espresso",
            type: "Espresso",
            region: "Brasil",
            date: "2023-05-01",
            altitude: 800,
            notes: "Sabor fuerte y concentrado",
        },
        {
            name: "Americano",
            type: "Americano",
            region: "Guatemala",
            date: "2023-04-10",
            altitude: 1700,
            notes: "Sabor suave y aromático",
        },
        {
            name: "Filtro",
            type: "Filtro",
            region: "Costa Rica",
            date: "2023-03-01",
            altitude: 2000,
            notes: "Sabor equilibrado y complejo",
        },
        {
            name: "Cold brew",
            type: "Cold brew",
            region: "Perú",
            date: "2023-02-15",
            altitude: 1300,
            notes: "Sabor suave y refrescante",
        },
        {
            name: "Latte macchiato",
            type: "Latte macchiato",
            region: "Nicaragua",
            date: "2023-01-20",
            altitude: 900,
            notes: "Sabor dulce y cremoso con notas de café",
        },
        {
            name: "Macchiato",
            type: "Macchiato",
            region: "Honduras",
            date: "2022-12-25",
            altitude: 700,
            notes: "Sabor fuerte y concentrado con notas de café",
        },
    ];

    const CoffeeTable = () => {

        const selectCoffee = (coffee) => () => setCoffee(coffee)

        return <table className="table table-bordered table-hover" >
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Región</th>
                </tr>
            </thead>
            <tbody>
                {coffees.map((coffee, index) => (
                    <tr key={index} onClick={selectCoffee(coffee)}>
                        <td>{coffee.id}</td>
                        <td>{coffee.name}</td>
                        <td>{coffee.type}</td>
                        <td>{coffee.region}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    }


    const CoffeeDetail = ({ coffee }) => <Card>
        <Card.Body>
            <Card.Title>{coffee.name}</Card.Title>
            <Card.Subtitle>{coffee.date}</Card.Subtitle>
            <Image src={coffee.image} alt={coffee.name} />
            <Card.Text>
                Notas: {coffee.notes} <br />
                <strong>Cultivado a una altura de {coffee.altitude} msnm</strong>

            </Card.Text>
        </Card.Body>
    </Card>


    return <div>
        <Row>
            <Col md={8}>
                <CoffeeTable id="coffeeTable"/>
            </Col>
            <Col md={4}>
                {coffee ? <CoffeeDetail coffee={coffee} /> : null}
            </Col>
        </Row>
    </div>
}

