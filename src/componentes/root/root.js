import React from 'react'
import {AuthContext} from '../../context/auth'
import {Route, Redirect} from 'react-router-dom'


class Root extends React.Component{
    render(){
        const {
            children,
        } = this.props
        const {
            authReady
        } = this.context
        
        if(!authReady){
            return <div>Cargando, un momento porfavor...</div>
        }
        return( children )
    }
}

Root.contextType = AuthContext
export default Root