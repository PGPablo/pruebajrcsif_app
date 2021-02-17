import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'

import {crearCardAction, 
        modificarCardAction, 
        eliminarCardAction} from '../../redux/cardsDucks'

import styles from './style.module.scss'

const ModalCards = (props) => {
    const dispatch = useDispatch()

    const [titulo, setTitulo] = React.useState("")
    const [contenido, setContenido] = React.useState("")
    const [imagen, setImagen] = React.useState("")
    const [accion, setAccion] = React.useState("")
    const [error, setError] = React.useState("")

    React.useEffect(() => {
        if(props.card) {
            setAccion('actualizar')
            setTitulo(props.card.titulo)
            setContenido(props.card.contenido)
            setImagen(props.card.imagenurl)
        } else {

        }
    }, [props])

    const accionFormCard = (cerrarModal) => {
        if(!titulo.trim() || !contenido.trim()){
            setError('Algunos capos estan vacios')
            return
        }
        if( imagen === ""){
            setError ('Seleccione una imagen, de preferencia de formato jpg o png')
            return
        }
        const cardData = {
            titulo: titulo,
            contenido: contenido,
            imagenurl: imagen,
            fecha: Date.now()
        }
        if(accion === 'actualizar'){
            dispatch(modificarCardAction(cardData, props.card.id))
            setError("")
            cerrarModal()
        }else{
            dispatch(crearCardAction(cardData))
            setError("")
            cerrarModal()
        }
    }

    const eliminarCard = (cerrarModal) => {
        dispatch(eliminarCardAction(props.card.id))
        setError("")
        cerrarModal()
    }

    const nodo = (
        <div className={styles.modalContainer}>
            <div className={styles.modalBox}>
                <h4>
                    {
                        accion === 'actualizar' ? 'Modificar card' : 'Crear card'
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
                            id="titulo_card"
                            placeholder="Titulo"
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)} />
                    </div>
                    <div className="col-12 mb-4">
                        <input type="text"
                            className="form-control"
                            id="contenido_card"
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
                        onClick={() => accionFormCard(props.onClose)}>
                        {
                            accion === 'actualizar' ? 'Modificar' : 'Crear'
                        }
                    </button>
                    {
                        accion === 'actualizar' && <button className="btn btn-outline-danger ml-2"
                                                           onClick={() => eliminarCard(props.onClose)}>
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

export default ModalCards