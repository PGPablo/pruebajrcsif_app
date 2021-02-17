import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usuarioReducer, {leerUsuarioActivoAccion} from './userDucks'
import noticiaReducer, {obtenerNoticiasAction} from './noticiasDucks'
import sliderReducer, {obtenerSlidersAction} from './slidersDucks'
import cardReducer, {obtenerCardsAction} from './cardsDucks'
import banerReducer, {obtenerBannersAction} from './banersDucks'

const rootReducer = combineReducers({
    usuario: usuarioReducer,
    noticias: noticiaReducer,
    sliders: sliderReducer,
    cards: cardReducer,
    banners: banerReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer,  composeEnhancers( applyMiddleware(thunk) ))
    obtenerNoticiasAction()(store.dispatch)
    obtenerSlidersAction()(store.dispatch)
    obtenerCardsAction()(store.dispatch)
    obtenerBannersAction()(store.dispatch)
    leerUsuarioActivoAccion()(store.dispatch)

    return store;
}