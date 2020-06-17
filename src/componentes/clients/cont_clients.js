import React from 'react'
import { AuthContext } from '../../context/auth'

import Admin from './Administracion';
import Clients from './Clients';

class ContCliente extends React.Component {

    render() {
        const {
            genes
        } = this.context

        return (
            <div>
                <div className="container border shadow mt-4 mb-4">
                    <content className="">
                        {
                            genes === 1
                                ? <Admin />
                                : <Clients />
                        }


                    </content>
                </div>
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}


ContCliente.contextType = (AuthContext)
export default ContCliente