import React from 'react'
import ModalNoticias from './ModalNoticias'

//Estilo
import { Row, Table } from 'react-bootstrap'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { obtenerNoticiasAction } from '../../redux/noticiasDucks'

//Estilo
import './style.module.scss'

const ModuloNoticias = () => {
    const dispatch = useDispatch()
    const noticias = useSelector(store => store.noticias.listaNoticias)
    const loading = useSelector(store => store.noticias.loading)


    const [modal, setModal] = React.useState(false)
    const [noticia, setNoticia] = React.useState(null)

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerNoticiasAction())
        }
        fetchData()
    }, [dispatch])


    const activarModal = (noticia) => {
        setModal(true)
        setNoticia(noticia)
    }

    const desactivarModal = () => {
        setModal(false)
    }

    return !loading ? (
        <div className="mx-auto">
            <h3 className="mt-2 center ">
                Noticias pantalla blog
            </h3>
            <div className="container mx-auto  ">
                <Row className="m-3">
                    <button className="btn btn-outline-success"
                        onClick={() => activarModal()}>
                        Agregar noticias
                        </button>
                </Row>
            </div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Subtitulo</th>
                        <th>Contenido</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {noticias ? (noticias.map((row) => {
                        return (
                            <tr key={row.id} >
                                <td>{row.titulo}</td>
                                <td>{row.subtitulo}</td>
                                <td>{row.contenido}</td>
                                <td>
                                    <button className="btn btn-warning"
                                        onClick={() => activarModal(row)}>
                                        Modificar
                                        </button>
                                </td>
                            </tr>
                        )
                    })) : null
                    }
                </tbody>
            </Table>

            {modal && <ModalNoticias
                noticia={noticia}
                onClose={() => desactivarModal()} />}
        </div>
    ) : (
            <div className="container border m-5 text-center">
                <div className="spinner-grow text-info m-5" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )

}

export default ModuloNoticias

