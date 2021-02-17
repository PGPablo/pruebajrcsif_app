import React from 'react'
import ModalSliders from './ModalSliders'

//Estilo
import {Row, Table} from 'react-bootstrap'
import styles from './style.module.scss'

//Redux
import {useDispatch, useSelector} from 'react-redux'
import {obtenerSlidersAction} from '../../redux/slidersDucks'


const ModuloSliders = () => {
    const dispatch = useDispatch()
    const sliders = useSelector(store => store.sliders.listaSliders)
    const loading = useSelector(store => store.sliders.loading)

    const [modal, setModal] = React.useState(false) 
    const [slider, setSliders] = React.useState(null)

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerSlidersAction())
        }
        fetchData()
    }, [dispatch])

    const activarModal = (slider) => {
        setModal(true)
        setSliders(slider)
    }

    const desactivarModal = () => {
        setModal(false)
    }


    return !loading ? (
        <div className="mx-auto">
            <h3 className="mt-2 center ">
                Sliders pantalla inicial
            </h3>
                <div className="container mx-auto  ">
                    <Row className="m-3">
                        <button className="btn btn-outline-success"
                            onClick={() => activarModal() }>
                                Agregar slider
                        </button>
                    </Row>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Subtitulo</th>
                            <th>Posición</th>
                            <th>Imagen</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sliders ? (sliders.map((row) => {
                            return(
                                <tr key={row.id} >
                                    <td>{row.titulo}</td>
                                    <td>{row.subtitulo}</td>
                                    <td>{row.posicion}</td>
                                    <td>
                                        <img src={row.imagenurl} alt="..." className={styles.imagen_tabla} />
                                    </td>
                                    <td>
                                        <button className="btn btn-warning"
                                            onClick={() => activarModal(row) }>
                                                Modificar
                                        </button>
                                    </td>
                                </tr>
                            )
                            })) : null
                        }
                    </tbody>
                </Table>

                {modal && <ModalSliders 
                                slider={slider}
                                onClose={() => desactivarModal()}  /> }
            </div>
    ) : (
        <div className="container border m-5 text-center">
          <div className="spinner-grow text-info m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
}

export default ModuloSliders
