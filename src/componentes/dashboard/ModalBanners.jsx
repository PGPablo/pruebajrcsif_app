import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'

import {crearBannerAction, 
        modificarBannerAction, 
        eliminarBannerAction} from '../../redux/banersDucks'

import styles from './style.module.scss'

const ModalBanners = (props) => {
    const dispatch = useDispatch()

    const [contenido, setContenido] = React.useState("")
    const [imagen, setImagen] = React.useState("")
    const [accion, setAccion] = React.useState("")
    const [error, setError] = React.useState("")

    React.useEffect(() => {
        if(props.banner) {
            setAccion('actualizar')
            setContenido(props.banner.contenido)
            setImagen(props.banner.imagenurl)
        } else {

        }
    }, [props])

    const accionFormBanner = (cerrarModal) => {
        if(!contenido.trim()){
            setError('Este banner no tiene contenido')
            return
        }
        if( imagen === ""){
            setError ('Seleccione una imagen, de preferencia de formato jpg o png')
            return
        }
        const bannerData = {
            contenido: contenido,
            imagenurl: imagen,
            fecha: Date.now()
        }
        if(accion === 'actualizar'){
            dispatch(modificarBannerAction(bannerData, props.banner.id))
            setError("")
            cerrarModal()
        }else{
            dispatch(crearBannerAction(bannerData))
            setError("")
            cerrarModal()
        }
    }

    const eliminarBanner = (cerrarModal) => {
        dispatch(eliminarBannerAction(props.banner.id))
        setError("")
        cerrarModal()
    }

    const nodo = (
        <div className={styles.modalContainer}>
            <div className={styles.modalBox}>
                <h4>
                    {
                        accion === 'actualizar' ? 'Modificar banner' : 'Crear banner'
                    }
                </h4>
                {
                    error !== "" &&
                    <div className="alert alert-warning mt-3">
                        {error}
                    </div>
                }
                <div className="form-group form-row">
                    <div className="col-12 mb-4">
                        <input type="text"
                            className="form-control"
                            id="contenido_banner"
                            placeholder="Contenido"
                            value={contenido}
                            onChange={e => setContenido(e.target.value)} />
                    </div>
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="imagenurl_input">Imagen</label>
                    {
                        accion === 'actualizar' && <div>
                            <img src={imagen} alt="..." className={styles.imagen_modal} />
                            <br />
                        </div>
                    }


                    <input type="file"
                        className="form-control-file"
                        id="imagenurl_sliders"
                        onChange={e => setImagen(e.target.files[0])} />
                </div>

                <div className="form-group">
                    <button type="submit"
                        className="btn btn-outline-info"
                        onClick={() => accionFormBanner(props.onClose)}>
                        {
                            accion === 'actualizar' ? 'Modificar' : 'Crear'
                        }
                    </button>
                    {
                        accion === 'actualizar' && <button className="btn btn-outline-danger ml-2"
                                                           onClick={() => eliminarBanner(props.onClose)}>
                                                            Eliminar
                                                    </button>
                    }
                    <button className="btn btn-outline-dark float-right"
                        onClick={props.onClose}>
                        Salir
                    </button>
                </div>
            </div>
        </div>
    )

    return ReactDOM.createPortal(nodo, document.getElementById("modal-root"))
}

export default ModalBanners