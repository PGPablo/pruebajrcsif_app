import React from 'react'
import {withRouter} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import {loginUserAction} from '../../redux/userDucks'

const LoginForm = (props) => {
    const dispatch = useDispatch()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const loading = useSelector(store => store.usuario.loading)
    const activo = useSelector(store => store.usuario.activo)
    const errorStore = useSelector(store => store.usuario.error)

    React.useEffect(() => {
        if(activo){
            props.history.push('/dashboard')
        }
        if(errorStore && !activo){
            setError("Usuario o contraseña incorrectos")  
        }
    }, [activo, errorStore, props])

    const procesarDatos = e => {
        e.preventDefault() 

        if(!email.trim() || !password.trim()){
            setError("Alguno de los campos estan vacio.")
            return
        }
        setError(null)
        acceder()
    }

    const acceder = React.useCallback( async () => {
        try{
            dispatch(loginUserAction(email, password))
            
            setEmail("")
            setPassword("")
            setError(null)
            props.history.push('/dashboard')

        }catch(e){
            console.log(e)
        }
    }, [email, password, setError, setEmail, setPassword, props, dispatch])

    return (
        <div className="mt-5">
            <h1 className="text-center">Inicia sesión</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input 
                            type="email"
                            className="form-control mb-2"
                            placeholder="ingresa tu email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password"
                            className="form-control mb-2"
                            placeholder="ingresa tu contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btn btn-success btn-block" 
                            type="submit"
                            disabled={loading}>
                            Acceder
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(LoginForm)
