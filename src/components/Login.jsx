import { Form, Button } from 'react-bootstrap';
import React from 'react';


export default function Login() {
    return <div>
        <p> Inicio de sesión</p>
        {/* <img/> */}
        <LoginForm />
    </div>
}

const LoginForm = () => {

    const CORRECT_USERNAME = "f.melo"
    const CORRECT_PASSWORD = "202021525"

    const [formValues, setFormValues] = React.useState({
        userName: '',
        password: '',
    })


    const [formValueIsValid, setFormValueIsValid] = React.useState({
        userName: false,
        password: false,
    })

    React.useEffect(() => {
        setFormValueIsValid({
            userName: formValues.userName === CORRECT_USERNAME,
            password: formValues.password === CORRECT_PASSWORD,
        })
    }, [formValues])

    const clickSubmit = () => {
        if (formValueIsValid.userName && formValueIsValid.password) {
            window.location.href = "/home"
        }
    }


    const clickCancel = () => {
        setFormValues({
            userName: '',
            password: '',
        })
    }

    return <Form >
        <Form.Group className="mb-3">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
                onChange={(event) => setFormValues({
                    ...formValues,
                    userName: event.target.value
                })}
                isValid={formValueIsValid.userName}
                isInvalid={!formValueIsValid.userName}
            />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                onChange={(event) => setFormValues({
                    ...formValues,
                    password: event.target.value
                })}
                isValid={formValueIsValid.password}
                isInvalid={!formValueIsValid.password}
            />
        </Form.Group>
        {(!formValueIsValid.userName || !formValueIsValid.password) && <Form.Text id="errorAuth">Error de autenticación. Revise sus credenciales</Form.Text>}
        <br />
        <Button id="botonIngresar" variant="success btn-lg" onClick={clickSubmit}>
            Ingresar
        </Button>
        <Button id="botonCancelar" variant="danger btn-lg" onClick={clickCancel}>
            Cancelar
        </Button>
    </Form>
}
