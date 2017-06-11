import React from 'react'
import {View, Text} from 'react-native'

import StyleSheet from '../styles'
import {AvatarEdit, Button, Popup, HorizontalRule, TextInput} from '../components'

export default class SignupScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showPopup: false,
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
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
                <View style={{flex: 3}}>
                    <TextInput
                        type="rounded"
                        placeholder={"Type Text here.."}
                        onChangeText={(text) => this.setState({ firstName: text})}
                    />

                    <TextInput
                        type="rounded"
                        placeholder={"Type Text here.."}
                        onChangeText={(text) => this.setState({ lastName: text})}
                    />

                    <TextInput
                        type="rounded"
                        placeholder={"Type Text here.."}
                        onChangeText={(text) => this.setState({ mobile: text})}
                    />

                    <TextInput
                        type="rounded"
                        placeholder={"Type Text here.."}
                        onChangeText={(text) => this.setState({ email: text})}
                    />
                </View>
                <View style={{flex: 2, padding: 30, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Text>First Name: {this.state.firstName}</Text>
                    <Text>Last Name: {this.state.lastName}</Text> 
                    <Text>Mobile: {this.state.mobile}</Text>           
                    <Text>Email: {this.state.email}</Text>
                </View>
                <Button
                    type="dialogDefault"
                    text={"SignUp"}
                    onPress={() => this.setState({showPopup: true})}
                />
            </View>
        )   
    }
}