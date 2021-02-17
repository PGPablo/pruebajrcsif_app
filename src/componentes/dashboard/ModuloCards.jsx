import React from 'react'
import moment from 'moment'
import ModalCards from './ModalCards'

//Estilo
import {Row, Table} from 'react-bootstrap'

//Redux
import {useDispatch, useSelector} from 'react-redux'
import {obtenerCardsAction} from '../../redux/cardsDucks'

//Estilo
import styles from './style.module.scss'

const ModuloCards = () => {
    const dispatch = useDispatch()
    const cards = useSelector(store => store.cards.listaCards)
    const loading = useSelector(store => store.cards.loading)

    const [modal, setModal] = React.useState(false)
    const [card, setCard] = React.useState(null)

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerCardsAction())
        }
        fetchData()
    }, [dispatch])

    const activarModal = (card) => {
        setModal(true)
        setCard(card)
    }
    const desactivarModal = () => {
        setModal(false)
    }

    return !loading ? (
        <div className="mx-auto">
            <h3 className="mt-2 center ">
                Cards pantalla inicial
            </h3>
                <div className="container mx-auto">
                    <Row className="m-3">
                        <button className="btn btn-outline-success"
                            onClick={() => activarModal() }>
                                Agregar card
                        </button>
                    </Row>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Contenido</th>
                            <th>Fecha</th>
                            <th>Imagen</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards ? (cards.map((row) => {
                            return(
                                <tr key={row.id} >
                                    <td>{row.titulo}</td>
                                    <td>{row.contenido}</td>
                                    <td>{moment(row.fecha).format('DD/MM/YYYY hh:mm a')}</td>
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

                {modal && <ModalCards 
                                card={card}
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

export default ModuloCards
