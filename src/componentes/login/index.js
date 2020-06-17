import React from 'react'
import {AuthContext } from '../../context/auth'

import { startUi } from '../../tools/firebase/setup'

class LoginForm extends React.Component {

    componentDidMount() {
        startUi('#firebaseuiDiv')
    }

    render() {
        return(
            <div className="container border shadow mt-4 pl-0 pr-0">
                <div className="pt-3 pb-3" id="firebaseuiDiv"></div>
            </div>
        )
    }
}

LoginForm.contextType = AuthContext
export default LoginForm