import React from 'react'
import {watchUserChanges, watchGenetica,} from '../tools/firebase'

export const AuthContext = React.createContext()

export class AuthContextProvider extends React.Component{
    state = {
        authReady: false,
        isLoggedIn: false,
        user: null,
        genes: 0,
    }

    componentDidMount(){
        watchUserChanges((user) => {
            if(user){
                this.setState({
                    authReady: true,
                    isLoggedIn: true,
                    user: user
                })
                watchGenetica((genes) => {
                    genes.forEach(gen => {
                        if(gen.idu === user.id){
                            this.setState({
                                genes: gen.valor,
                            })
                        }
                    });
                })

            }else{
                this.setState({
                    authReady: true,
                    isLoggedIn: false,
                    user: null,
                    genes: 0,
                })
            }
        })
    }

    render(){
        return(
            <AuthContext.Provider value={this.state} >
                {this.props.children}     
            </AuthContext.Provider>
                
        )
    }
}

export const AuthContextConsumer = AuthContext.Consumer