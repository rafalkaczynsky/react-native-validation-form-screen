import React from 'react'
import {View, Text} from 'react-native'

import StyleSheet from '../styles'
import {AvatarEdit, Button, Popup, HorizontalRule} from '../components'

export default class SignupScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showPopup: false
        }
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <AvatarEdit
                    onChange={() => alert('onChange')}
                    imageUrl={null}
                    style={StyleSheet.singleMargin}
                />
                <HorizontalRule text={"Signup"} />
                <Button
                    type="dialogDefault"
                    text={"SignUp"}
                    onPress={() => this.setState({showPopup: true})}
                />
            </View>
        )   
    }
}