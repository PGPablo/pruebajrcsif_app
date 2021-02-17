import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'

import {crearSlidersAction, 
        modificarSlidersAction, 
        eliminarSlidersAction} from '../../redux/slidersDucks'

import styles from './style.module.scss'


const ModalSliders = (props) => {
    const dispatch = useDispatch()

    const [titulo, setTitulo] = React.useState("")
    const [subtitulo, setSubtitulo] = React.useState("")
    const [posicion, setPosicion] = React.useState("")
    const [imagen, setImagen] = React.useState("")
    const [accion, setAccion] = React.useState("")
    const [error, setError] = React.useState("")

    React.useEffect(() => {
        if (props.slider) {
            setAccion('actualizar')
            setTitulo(props.slider.titulo)
            setSubtitulo(props.slider.subtitulo)
            setPosicion(props.slider.posicion)
            setImagen(props.slider.imagenurl)
        } else {

        }
    }, [props])

    const accionFormSlider = (cerrarModal) => {
        if (!titulo.trim() || !subtitulo.trim() || !posicion.trim()) {
            setError('Alguno de los campos esta vacio')
            return
        }
        if( imagen === ""){
            setError('Seleccione una imagen, de preferencia con formato jpg o png')
            return
        }
        
        const slidersData = {
            titulo: titulo,
            subtitulo: subtitulo,
            posicion: posicion,
            imagenurl: imagen,
        }

        if(accion === 'actualizar'){
            dispatch(modificarSlidersAction(slidersData, props.slider.id))
            setError("")
            cerrarModal()
        }else{
            dispatch(crearSlidersAction(slidersData))
            setError("")
            cerrarModal()
        }
    }
    const eliminarSlider = (cerrarModal) => {
        dispatch(eliminarSlidersAction(props.slider.id))
        setError("")
        cerrarModal()
    }

    const nodo = (
        <div className={styles.modalContainer}>
            <div className={styles.modalBox}>
                <h4>
                    {
                        accion === 'actualizar' ? 'Modificar slider' : 'Crear slider'
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
                            id="titulo_slider"
                            placeholder="Titulo"
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)} />
                    </div>
                    <div className="col-12 mb-4">
                        <input type="text"
                            className="form-control"
                            id="subtitulo_slider"
                            placeholder="Subtitulo"
                            value={subtitulo}
                            onChange={e => setSubtitulo(e.target.value)} />
                    </div>
                    <div className="col-12 mb-4">
                        <input type="number"
                            className="form-control"
                            id="posicion_slider"
                            placeholder="Posición"
                            value={posicion}
                            onChange={e => setPosicion(e.target.value)} />
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
                        onClick={() => accionFormSlider(props.onClose)}>
                        {
                            accion === 'actualizar' ? 'Modificar' : 'Crear'
                        }
                    </button>
                    {
                        accion === 'actualizar' && <button className="btn btn-outline-danger ml-2"
                                                           onClick={() => eliminarSlider(props.onClose)}>
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

export default ModalSliders
