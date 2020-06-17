// LIBS
import React from 'react'
import moment from 'moment'
import {ArchivosContext} from '../../context/archivos'
import {Table, Button}  from 'react-bootstrap'

class Clients extends React.Component {
    render(){
        const {
            archivos,
        } = this.context

        return(
            <div className="container border shadow mt-4">
                <div className="titulo_clientes_tabla"> 
                    <h2>Bienvenido a su gestor de información.</h2>
                    <h4>Usted tiene {archivos.length} archivos.</h4>

                </div>
                <div className="botones_filtros">

                </div>
                <div>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Fecha</th>
                                <th>Subido por</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {archivos.map((archivo) =>{
                                return (
                                    <tr key={archivo.id}>
                                        <td>{archivo.nombre}</td>
                                        <td>{archivo.tipo}</td>
                                        <td>{moment(archivo.fecha.seconds).format('DD/MM/YYYY hh:mm a')}</td>
                                        <td>{archivo.subidopor}</td>
                                        <td> <Button variant="success" href={archivo.archivo}>Descargar</Button> </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </Table>
                </div>
            </div>
        )
    }
}

Clients.contextType = ArchivosContext
export default Clients
