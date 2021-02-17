import { db, storage } from '../firebase'

//constantes
const dataInicial = {
    loading: false,
    error: false
}

//types
const LOADING = 'LOADING'
const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
const SET_CARD_SUCCESS = 'SET_CARD_SUCCESS'
const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS'
const PUT_CARD_SUCCESS = 'PUT_CARD_SUCCESS'
const ERROR_CARD = 'ERROR_CARD'

//reduccer

export default function cardReducer(state = dataInicial, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case GET_CARDS_SUCCESS:
            return { ...state, loading: false, listaCards: action.payload }
        case SET_CARD_SUCCESS:
            return { ...state, loading: false }
        case PUT_CARD_SUCCESS:
            return { ...state, loading: false }
        case DELETE_CARD_SUCCESS:
            return { ...state, error: true }
        case ERROR_CARD:
            return { ...state, error: true }
        default:
            return { ...state }
    }
}

//action

export const obtenerCardsAction = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const data = await db.collection('cards').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        dispatch({
            type: GET_CARDS_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        dispatch({
            type: ERROR_CARD
        })
    }

}


export const crearCardAction = (cardData) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const imagenRef = await storage.ref().child('img_cards').child(cardData.imagenurl.name)
        await imagenRef.put(cardData.imagenurl)

        const imagenURL = await imagenRef.getDownloadURL()
        cardData.imagenurl = imagenURL

        await db.collection('cards').doc().set(cardData)

        const data = await db.collection('cards').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        dispatch({
            type: SET_CARD_SUCCESS
        })
        dispatch({
            type: GET_CARDS_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        dispatch({
            type: ERROR_CARD
        })
    }
}

export const modificarCardAction = (cardData, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    let imagenURL = cardData.imagenurl

    try {
        try {
            const imagenRef = await storage.ref().child('img_cards').child(cardData.imagenurl.name)
            await imagenRef.put(cardData.imagenurl)
            imagenURL = await imagenRef.getDownloadURL()
        } catch (error) {
            imagenURL = cardData.imagenurl
        }

        await db.collection('cards').doc(id).update({
            titulo: cardData.titulo,
            contenido: cardData.contenido,
            fecha: cardData.fecha,
            imagenurl: imagenURL,
        })

        const data = await db.collection('cards').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        dispatch({
            type: PUT_CARD_SUCCESS
        })
        dispatch({
            type: GET_CARDS_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        dispatch({
            type: ERROR_CARD
        })
    }
}

export const eliminarCardAction = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        await db.collection('cards').doc(id).delete()

        dispatch({
            type: DELETE_CARD_SUCCESS
        })

        const data = await db.collection('cards').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data }))

        dispatch({
            type: GET_CARDS_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        dispatch({
            type: ERROR_CARD
        })
    }
}
