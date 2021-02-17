import { db, storage } from '../firebase'

//constantes
const dataInicial = {
    loading: false,
    error: false
}

//types
const LOADING = 'LOADING'
const GET_BANNER_SUCCESS = 'GET_BANNERS_SUCCESS'
const SET_BANNER_SUCCESS = 'SET_BANNER_SUCCESS'
const DELETE_BANNER_SUCCESS = 'DELETE_BANNER_SUCCESS'
const PUT_BANNER_SUCCESS = 'PUT_BANNER_SUCCESS'
const ERROR_BANNER = 'ERROR_BANNER'

//reduccer

export default function banerReducer(state = dataInicial, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case GET_BANNER_SUCCESS:
            return { ...state, loading: false, listaBanners: action.payload }
        case SET_BANNER_SUCCESS:
            return { ...state, loading: false }
        case PUT_BANNER_SUCCESS:
            return { ...state, loading: false }
        case DELETE_BANNER_SUCCESS:
            return { ...state, error: true }
        case ERROR_BANNER:
            return { ...state, error: true }
        default:
            return { ...state }
    }
}

//action

export const obtenerBannersAction = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const data = await db.collection('banners').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        dispatch({
            type: GET_BANNER_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        dispatch({
            type: ERROR_BANNER
        })
    }

}


export const crearBannerAction = (bannerData) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const imagenRef = await storage.ref().child('img_banners').child(bannerData.imagenurl.name)
        await imagenRef.put(bannerData.imagenurl)

        const imagenURL = await imagenRef.getDownloadURL()
        bannerData.imagenurl = imagenURL

        await db.collection('banners').doc().set(bannerData)

        const data = await db.collection('banners').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        dispatch({
            type: SET_BANNER_SUCCESS
        })
        dispatch({
            type: GET_BANNER_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        dispatch({
            type: ERROR_BANNER
        })
    }
}

export const modificarBannerAction = (bannerData, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    let imagenURL = bannerData.imagenurl

    try {
        try {
            const imagenRef = await storage.ref().child('img_banners').child(bannerData.imagenurl.name)
            await imagenRef.put(bannerData.imagenurl)
            imagenURL = await imagenRef.getDownloadURL()
        } catch (error) {
            imagenURL = bannerData.imagenurl
        }

        await db.collection('banners').doc(id).update({
            contenido: bannerData.contenido,
            imagenurl: imagenURL,
        })

        const data = await db.collection('banners').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        dispatch({
            type: PUT_BANNER_SUCCESS
        })
        dispatch({
            type: GET_BANNER_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        dispatch({
            type: ERROR_BANNER
        })
    }
}

export const eliminarBannerAction = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        await db.collection('banners').doc(id).delete()

        dispatch({
            type: DELETE_BANNER_SUCCESS
        })

        const data = await db.collection('banners').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data }))

        dispatch({
            type: GET_BANNER_SUCCESS,
            payload: arrayData
        })
    } catch (error) {
        dispatch({
            type: ERROR_BANNER
        })
    }
}
