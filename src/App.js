import React from 'react'
import {Provider} from 'react-redux'

import {Signup} from './containers'
import store from './store'

export default class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Signup />
            </Provider>
        )
    }
}


