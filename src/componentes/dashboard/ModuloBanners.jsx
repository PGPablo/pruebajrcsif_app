import React from 'react'
import ModalBanner from './ModalBanners'

//Estilo
import {Row, Table} from 'react-bootstrap'

//Redux
import {useDispatch, useSelector} from 'react-redux'
import {obtenerBannersAction} from '../../redux/banersDucks'

//Estilo
import styles from './style.module.scss'

const ModuloBanners = () => {
    const dispatch = useDispatch()
    const banners = useSelector(store => store.banners.listaBanners)
    const loading = useSelector(store => store.banners.loading)

    const [modal, setModal] = React.useState(false)
    const [banner, setBanner] = React.useState(null)

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerBannersAction())
        }
        fetchData()
    }, [dispatch])

    const activarModal = (banner) => {
        setModal(true)
        setBanner(banner)
    }
    const desactivarModal = () => {
        setModal(false)
    }

    return !loading ? (
        <div className="mx-auto">
            <h3 className="mt-2 center ">
                Banners pantalla inicial
            </h3>
                <div className="container mx-auto">
                    <Row className="m-3">
                        <button className="btn btn-outline-success"
                            onClick={() => activarModal() }>
                                Agregar banner
                        </button>
                    </Row>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Contenido</th>
                            <th>Imagen</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banners ? (banners.map((row) => {
                            return(
                                <tr key={row.id} >
                                    <td>{row.contenido}</td>
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

                {modal && <ModalBanner
                                banner={banner}
                                onClose={() => desactivarModal() }  /> }
            </div>
    ) : (
        <div className="container border m-5 text-center">
          <div className="spinner-grow text-info m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
}

export default ModuloBanners
