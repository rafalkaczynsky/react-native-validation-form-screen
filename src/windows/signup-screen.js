import React, {Component} from 'react'
import {View, Text} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import {Field, reduxForm} from 'redux-form'

import {Button, HorizontalRule, Form, Title} from '../components'
import {AvatarInput, TextInput} from '../components/forms'
import StyleSheet from '../styles'
import validation from '../config/validation'

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showPassword: false,
      image: undefined,
      imageUrl: this.props.imageUrl,
    }
  }

  submit = values => {

    this.props.signUp(values.email, values.password, {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      image: values.image,
    })
  }

  render() {
    const errorCode = this.props.signUpError && this.props.signUpError.code
    
    const {handleSubmit, valid} = this.props

    return (
      <View style={{flex: 1, backgroundColor: '#f5f5f5'}} onPress={handleSubmit}>
        <Form style={StyleSheet.signup.style}>
          <Title text={'WELCOME IN MY APP'}/>
          <HorizontalRule
            text={"Signup"}
          />
          <Field
            name="image"
            component={AvatarInput}
          />
          <Field
            name="name"
            component={TextInput}
            type="flat"
            ref="name"
            placeholder={"Name"}
            validate={[validation.required, validation.maxChars20]}
            style={StyleSheet.halfMarginBottom}
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
            selectTextOnFocus={true}
            enablesReturnKeyAutomatically={true}
            icon="name"
          />
          <Field
            name="email"
            component={TextInput}
            type="flat"
            ref="email"
            placeholder={"Email"}
            validate={[validation.required, validation.email]}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            selectTextOnFocus={true}
            enablesReturnKeyAutomatically={true}
            keyboardType="email-address"
            icon="email"
          />
          <Field
            name="password"
            component={TextInput}
            type="flat"
            ref="password"
            placeholder={"Password"}
            validate={[validation.required, validation.minChars6]}
            style={[StyleSheet.halfMarginBottom]}
            secureTextEntry={!this.state.showPassword}
            returnKeyType="next"
            selectTextOnFocus={false}
            clearTextOnFocus={false}
            enablesReturnKeyAutomatically={true}
            icon="password"
            multiline={false}
          />
          <Field
            name="phone"
            component={TextInput}
            type="flat"
            ref="phone"
            placeholder={"Phone"}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            selectTextOnFocus={true}
            enablesReturnKeyAutomatically={true}
            keyboardType="phone-pad"
            icon="phone"
          />
          <Button
            type={valid ? "roundedDefault" : "roundedGrey"}
            text={"Signup"}
            onPress={handleSubmit(this.submit)}
            style={[StyleSheet.doubleMarginTop, StyleSheet.singleMarginBottom, {marginTop: 60}]}
          />
          <KeyboardSpacer/>
        </Form>
      </View>
    )
  }
}

SignUp.propTypes = {
  signUp: React.PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'SignUpValidation',
})(SignUp)
