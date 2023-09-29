import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col } from 'react-bootstrap';



export default function Home() {

    const [coffee, setCoffee] = React.useState(null)

    const Tabla = () => {

        const coffees = [
            {
                id: 1,
                name: "Café con leche",
                type: "Latte",
                region: "Colombia",
            },
            {
                id: 2,
                name: "Capuccino",
                type: "Capuccino",
                region: "Italia",
            },
            {
                id: 3,
                name: "Mocha",
                type: "Mocha",
                region: "México",
            },
        ];

        const selectCoffee = (coffee) => () => {
            setCoffee(coffee)
        }

        return (<Table striped bordered hover>
            <thead>
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


    const Detail = ({ coffee }) => {
        return <div>
            <h1>{coffee.name}</h1>
            <p>{coffee.type}</p>
            <p>{coffee.region}</p>
        </div>
    }

    return <div>
        <Row>
            <Col md={8}>
                <Tabla />
            </Col>
            <Col md={4}>
                {coffee ? <Detail coffee={coffee} /> : null}
            </Col>
        </Row>

    </div>
}

