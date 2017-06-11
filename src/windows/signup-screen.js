import React from 'react'
import {View, Text} from 'react-native'

import StyleSheet from '../styles'
import {AvatarEdit} from '../components'

export default class SignupScreen extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <AvatarEdit
                    onChange={() => alert('onChange')}
                    imageUrl={null}
                    style={StyleSheet.singleMargin}
                />
            </View>
        )   
    }
}