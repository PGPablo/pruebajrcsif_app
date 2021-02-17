import {db, storage} from '../firebase'

// constantes
const dataInicial = {
    loading: false,
    error: false
}

// Nombre de las acciones
const LOADING = 'LOADING'
const GET_SLIDERS_SUCCESS = 'GET_SLIDERS_SUCCESS'
const SET_SLIDERS_SUCCESS = 'SET_SLIDERS_SUCCESS'
const DELETE_SLIDERS_SUCCESS = 'DELETE_SLIDERS_SUCCESS'
const PUT_SLIDERS_SUCCESS = 'PUT_SLIDERS_SUCCESS'
const ERROR_SLIDERS = 'ERROR_SLIDERS'


export default function sliderReducer(state = dataInicial, action){
    switch(action.type){
        case LOADING:
            return{...state, loading: true}
        case GET_SLIDERS_SUCCESS:
            return{...state, loading: false, listaSliders: action.payload}
        case SET_SLIDERS_SUCCESS:
            return{...state, loading: false, }
        case PUT_SLIDERS_SUCCESS:
            return{...state, loading: false, }
        case DELETE_SLIDERS_SUCCESS:
            return{...state, loading: false,}
        case ERROR_SLIDERS:
            return{...state, error: true}  
        default:
            return {...state}
    }
}


export const obtenerSlidersAction = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try{
        const data = await db.collection("sliders")
        .orderBy('posicion')
        .get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        dispatch({
            type: GET_SLIDERS_SUCCESS,
            payload: arrayData
        })
    }catch (e) {
        console.log(e)
        dispatch({
            type: ERROR_SLIDERS
        })
    }

}

//Esto se puede mejorar con el getState y modificando unicamente el campo 
export const crearSlidersAction = (slidersData) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const imagenRef = await storage.ref().child('img_slider').child(slidersData.imagenurl.name)
        await imagenRef.put(slidersData.imagenurl)

        const imagenURL = await imagenRef.getDownloadURL()
        slidersData.imagenurl = imagenURL

        await db.collection('sliders').doc().set(slidersData)

        const data = await db.collection('sliders')
        .orderBy('posicion')
        .get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        dispatch({
            type: SET_SLIDERS_SUCCESS,
        })
        dispatch({
            type: GET_SLIDERS_SUCCESS,
            payload: arrayData
        })

    } catch (e) {
        dispatch({
            type: ERROR_SLIDERS
        })
    }
}

//Igual con todo esto 
export const modificarSlidersAction = (slidersData, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    
    let imagenURL = slidersData.imagenurl

    try {
        try {
            const imagenRef = await storage.ref().child('img_sliders').child(slidersData.imagenurl.name)
            await imagenRef.put(slidersData.imagenurl)
            imagenURL = await imagenRef.getDownloadURL()
        } catch (error) {
            imagenURL = slidersData.imagenurl
        }

        await db.collection('sliders').doc(id).update({
            titulo: slidersData.titulo,
            subtitulo: slidersData.subtitulo,
            posicion: slidersData.posicion,
            imagenurl: imagenURL,
        })

        const data = await db.collection('sliders')
        .orderBy('posicion')
        .get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        dispatch({
            type: PUT_SLIDERS_SUCCESS
        })
        dispatch({
            type: GET_SLIDERS_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        dispatch({
            type: ERROR_SLIDERS
        })
    }
}

//Mejoralo plis
export const eliminarSlidersAction = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {

        await db.collection('sliders').doc(id).delete()
        
        dispatch({
            type: DELETE_SLIDERS_SUCCESS
        })
        
        const data = await db.collection('sliders')
        .orderBy('posicion')
        .get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  
        dispatch({
            type: GET_SLIDERS_SUCCESS,
            payload: arrayData
        })

        
    } catch (error) {
        console.log(error)
        dispatch({
            type: ERROR_SLIDERS
        })
    }
} 