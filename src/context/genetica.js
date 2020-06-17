import React from 'react'
import {watchGenetica, watchUserChanges} from '../tools/firebase'


export const GeneticaContext = React.createContext()

export class GeneticaContextProvider extends React.Component{
    state = {
        genetica: []
    }

    componentDidMount(){
       watchUserChanges ((user) => {
           if(user && !this.isSetup){
               this.isSetup = true
               watchGenetica((genetica) =>{
                   this.setState({genetica})
               })

           }
       })
    }

    render(){
        return(
            <GeneticaContext.Provider value={this.state}>
                {this.props.children}     
            </GeneticaContext.Provider>
                
        )
    }
}

export const GeneticaContextConsumer = GeneticaContext.Consumer