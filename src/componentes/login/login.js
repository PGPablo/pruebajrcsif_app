import React from 'react'
import Firebase from "../../server/firebase"

import { Button, Table } from 'react-bootstrap';


class Login extends React.Component{
    state ={
        autenticado : false,
        usuario : "",
        firebase : null
    }


    componentDidMount(){
        

        const firebase = new Firebase()
        
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
            ? this.setState({
                autenticado : true,
                usuario: firebase.auth.currentUser.email,
                firebase : firebase
            })
            : firebase.firebaseui.start("#firebaseui-auth-container",{
                signInSuccessUrl : "",
                credentialHelper: "none",
                callbacks:{
                    signInSuccessWhitAuthResult : (authResult, redirectUrl) =>{
                        this.setState({
                            autenticado : true,
                            usuario : firebase.auth.currentUser.email,
                            firebase : firebase
                        })
                        return false
                    }
                },
                signInOptions:[
                    {
                        provider : firebase.autorization.EmailAuthProvider.PROVIDER_ID
                    }
                ]
            })
        })
    }

    render(){
        return this.state.autenticado
        ?(
            <React.Fragment>
                <div className="row border m-3 p-3" >
                    <h3 className="" >Usuario logeado: {this.state.usuario} </h3>
                    <a className="btn btn-danger ml-5 pl-4 pr-4" href="" onClick={ () => {
                                            this.state.firebase.auth.signOut().then( success =>{
                                                this.setState({ autenticado:false }) 
                                            })
                                        } }> Salir </a>
                </div>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Nombre del archivo</th>
                        <th>Tipo de archivo</th>
                        <th>Fecha de subida</th>
                        <th>Funcionalidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Archivo 1</td>
                        <td>pdf</td>
                        <td>28/05/2020</td>
                        <td><Button variant="success">Descargar</Button></td>
                        </tr>
                        <tr>
                        <td>Archivo 2</td>
                        <td>xml</td>
                        <td>28/05/2020</td>
                        <td><Button variant="success">Descargar</Button></td>
                        </tr>
                        <tr>
                        <td>Archivo 3</td>
                        <td>pdf</td>
                        <td>28/05/2020</td>
                        <td><Button variant="success">Descargar</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        )
        :<div id="firebaseui-auth-container" className="pt-4 pb-4">

        </div>
    }
}

export default Login