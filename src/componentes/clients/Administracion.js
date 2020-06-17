// LIBS
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { GeneticaContext } from '../../context/genetica'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { createGenetica, createArchivo } from '../../tools/firebase'

const formSchemaGenetica = yup.object().shape({
    idu: yup.string().required(),
    nombre: yup.string().required(),
    tipo: yup.string().required(),
})
const formSchemaArchivo = yup.object().shape({
    archivo: yup.string(),
    fecha: yup.string(),
    subidopor: yup.string().required(),
    tipo: yup.string().required(),
    propietario: yup.string().required(),
})

class RegistroGeneticaFrom extends Component {

    onSubmit = async (values, formikBag) => {
        await createGenetica(values)
        formikBag.setSubmitting(false)

    }
    render() {
        return (
            <Formik
                initialValues={{
                    idu: "",
                    nombre: "",
                    tipo: "1",

                }}
                validationSchema={formSchemaGenetica}
                onSubmit={this.onSubmit}
                render={(props) => {
                    const {
                        values,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        isValid,
                        errors,
                    } = props
                    console.log(errors)
                    return(
                        <Form className="container border mt-4 mb-4" onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>ID del usuario </Form.Label>
                                    <Form.Control onChange={ handleChange('idu') }
                                         type="text" placeholder="Ingrese el id" id="idu" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Nombre completo </Form.Label>
                                    <Form.Control onChange={ handleChange('nombre')} type="text" 
                                        placeholder="Ingrese el id" id="nombre" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>

                                <Form.Group as={Col} >
                                    <Form.Label>Tipo de usuario</Form.Label>
                                    <Form.Control onChange={ handleChange('tipo')} as="select" defaultValue="Choose..." id="tipo" >
                                        <option value="1">Cliente</option>
                                        <option value="2">Administrador</option>
                                    </Form.Control>
                                </Form.Group>

                            </Form.Row>

                            <Button disabled={isSubmitting || !isValid}
                                className="mb-4" variant="primary" type="submit">
                                Registrar
                            </Button>
                        </Form>
                    )
                    
                }}
            />
                

        )
    }
}

class RegistroArchivoFrom extends Component {
    onSubmit = async (values, formikBag) => {
        await createArchivo(values)
        formikBag.setSubmitting(false)
        
        
    }
    render() {
        return (
            <Formik 
                initialValues={{
                    archivo: "",
                    nombre: "",
                    fecha: Date.now(),
                    subidopor: "",
                    tipo: "",
                    propietario: "",
                }}
                validationSchema={formSchemaArchivo}
                onSubmit={this.onSubmit}
                render={(props) => {
                    const {
                        values,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        isValid,
                        errors,
                    } = props
                    console.log(errors)
                    return(
                        <Form className="container border mt-4 mb-4" onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Nombre del archivo </Form.Label>
                                    <Form.Control onChange={ handleChange('nombre')}
                                        type="text" placeholder="Ingrese el id" />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Tipo de archivo</Form.Label>
                                    <Form.Control onChange={ handleChange('tipo')}
                                        as="select" defaultValue="Choose...">
                                        <option >PDF</option>
                                        <option >XML</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>

                                <Form.Group as={Col} >
                                    <Form.Label>Propietario del archivo</Form.Label>
                                    <Form.Control onChange={handleChange('propietario')} as="select" defaultValue="Choose...">
                                        <option value="feaff">Cliente 1 </option>
                                        <option value="fsefse">Cliente 2</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.File onChange={handleChange('archivo')}
                                    required name="file" label="File" id="validationFormik107" />

                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Subido por:</Form.Label>
                                    <Form.Control onChange={handleChange('subidopor')}
                                    type="text" placeholder="Nombre del usuario que subio el archivo" />
                                </Form.Group>

                            </Form.Row>
                            <Button disabled={isSubmitting || !isValid}
                                className="mb-4" variant="primary" type="submit">
                                Registrar
                            </Button>
                        </Form>
                    )

                }}
            />
            
        )
    }
}



class Admin extends React.Component {
    state = { form_select: "usuario" }
    render() {
        const {
            genetica
        } = this.context

        return (
            <div className="">
                <div className="titulo_clientes_tabla">
                    <h2>Bienvenido a su gestor de información.</h2>
                    <h4>El numero de usuarios actual es de: {genetica.length}</h4>
                </div>

                <div className="container border shadow mt-4 mb-4">

                    <Container>
                        <Row>
                            <Col sm={4}>
                                <Container className="border mt-4 mb-4">
                                    <Button className="mt-4 mb-4 w-100"
                                        onClick={() => this.setState({ form_select: "usuario" })}>
                                        Registrar un nuevo usuario
                                    </Button>
                                    <Button className="mt-4 mb-4 w-100"
                                        onClick={() => this.setState({ form_select: "archivo" })}>
                                        Subir un archivo
                                    </Button>
                                </Container>
                            </Col>
                            <Col sm={8}>
                                <Container className="border mt-4 mb-4">
                                    {
                                        this.state.form_select === "usuario"
                                            ? <RegistroGeneticaFrom />
                                            : this.state.form_select === "archivo"
                                                ? <RegistroArchivoFrom />
                                                : <div>Ningun formulario seleccionado.</div>

                                    }


                                </Container>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

Admin.contextType = (GeneticaContext)
export default Admin




