import {db} from '../firebase'

// constantes
const dataInicial = {
    loading: false,
    error: false
}

// types
const LOADING = 'LOADING'
const GET_NOTICIAS_SUCCESS = 'GET_NOTICIAS_SUCCESS'
const SET_NOTICIAS_SUCCESS = 'SET_NOTICIAS_SUCCESS'
const DELETE_NOTICIAS_SUCCESS = 'DELETE_NOTICIAS_SUCCESS'
const PUT_NOTICIAS_SUCCESS = 'PUT_NOTICIAS_SUCCESS'
const ERROR_NOTICIAS = 'ERROR_NOTICIAS'

// reducer
export default function noticiaReducer(state = dataInicial, action){
    switch(action.type){
        case LOADING:
            return{...state, loading: true}
        case GET_NOTICIAS_SUCCESS:
            return{...state, loading: false, listaNoticias: action.payload}
        case SET_NOTICIAS_SUCCESS:
            return{...state, loading: false, }
        case PUT_NOTICIAS_SUCCESS:
            return{...state, loading: false, }
        case DELETE_NOTICIAS_SUCCESS:
            return{...state, loading: false,}
        case ERROR_NOTICIAS:
            return{...state, error: true}  
        default:
            return {...state}
    }
}

// actions
export const obtenerNoticiasAction = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try{
        const data = await db.collection('noticias').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        dispatch({
            type: GET_NOTICIAS_SUCCESS,
            payload: arrayData
        })
    }catch (e) {
        dispatch({
            type: ERROR_NOTICIAS
        })
    }

}

//Esto se puede mejorar con el getState y modificando unicamente el campo 
export const crearNoticiasAction = (noticiaData) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        await db.collection('noticias').doc().set(noticiaData)

        const data = await db.collection('noticias').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        dispatch({
            type: SET_NOTICIAS_SUCCESS,
        })
        dispatch({
            type: GET_NOTICIAS_SUCCESS,
            payload: arrayData
        })

    } catch (e) {
        dispatch({
            type: ERROR_NOTICIAS
        })
    }
}

//Igual con todo esto 
export const modificarNoticiasAction = (noticiaData, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    
    try {
        
        await db.collection('noticias').doc(id).update({
            titulo: noticiaData.titulo,
            subtitulo: noticiaData.subtitulo,
            contenido: noticiaData.contenido,
        })

        const data = await db.collection('noticias').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        dispatch({
            type: PUT_NOTICIAS_SUCCESS
        })
        dispatch({
            type: GET_NOTICIAS_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        dispatch({
            type: ERROR_NOTICIAS
        })
    }
}

//Mejoralo plis
export const eliminarNoticiasAction = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {

        await db.collection('noticias').doc(id).delete()
        
        dispatch({
            type: DELETE_NOTICIAS_SUCCESS
        })
        
        const data = await db.collection('noticias').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  
        dispatch({
            type: GET_NOTICIAS_SUCCESS,
            payload: arrayData
        })

        
    } catch (error) {
        console.log(error)
        dispatch({
            type: ERROR_NOTICIAS
        })
    }
} 