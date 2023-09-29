import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col, Card, Image } from 'react-bootstrap';



export default function Home() {

    const [coffee, setCoffee] = React.useState(null)

    const Tabla = () => {

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


        const selectCoffee = (coffee) => () => {
            setCoffee(coffee)
        }

        return (<Table striped bordered hover class="table">
            <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Región</th>
                </tr>
            </thead>
            <tbody>
                {coffees.map((coffee) => (
                    <tr key={coffee.id} onClick={selectCoffee(coffee)}>
                        <td>{coffee.id}</td>
                        <td>{coffee.name}</td>
                        <td>{coffee.type}</td>
                        <td>{coffee.region}</td>
                    </tr>
                ))}
            </tbody>
        </Table>)
    }


    const CoffeeDetail = ({ coffee }) => {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{coffee.name}</Card.Title>
                    <Card.Subtitle>{coffee.date}</Card.Subtitle>
                    <Image src={coffee.image} alt={coffee.name} />
                    <Card.Text>
                        Notas: {coffee.notes} <br/>
                        <strong>Cultivado a una altura de {coffee.altitude} msnm</strong>

                    </Card.Text>
                </Card.Body>
            </Card>
        );
    };


    return <div>
        <Row>
            <Col md={8}>
                <Tabla />
            </Col>
            <Col md={4}>
                {coffee ? <CoffeeDetail coffee={coffee} /> : null}
            </Col>
        </Row>

    </div>
}

