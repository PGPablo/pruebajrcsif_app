import React from 'react'
import {watchArchivos, watchUserChanges} from '../tools/firebase'


export const ArchivosContext = React.createContext()

export class ArchivosContextProvider extends React.Component{
    state = {
        archivos: []
    }

    componentDidMount(){
       watchUserChanges ((user) => {
           if(user && !this.isSetup){
               this.isSetup = true
               watchArchivos((archivos) => {
                   this.setState({archivos})
               })
           }
       })
    }

    render(){
        return(
            <ArchivosContext.Provider value={this.state}>
                {this.props.children}     
            </ArchivosContext.Provider>
                
        )
    }
}

export const ArchivosContextConsumer = ArchivosContext.Consumer