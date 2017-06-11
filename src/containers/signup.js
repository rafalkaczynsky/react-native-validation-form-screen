import React from 'react'
import {SignupScreen} from '../windows'

import {signUp} from '../actions/user'


export default class Signup extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <SignupScreen 
                signUp={signUp}
            />
        )
    }
}
