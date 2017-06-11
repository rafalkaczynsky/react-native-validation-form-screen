import React from 'react'
import {View, TextInput as _TextInput, Text, TouchableHighlight, Platform} from 'react-native'

import StyleSheet from '../styles'
import HorizontalRule from './horizontal-rule'
import Icon from './icon'
import Popup from './popup'
import Button from './button'


export default class TextInput extends React.Component {

  constructor() {
    super()
    this.state = {
      showPopup: false,
    }
  }

  focus() {
    if(this.refs.input) {this.refs.input.focus()}
  }

  onPress = () => {
    this.setState({showPopup: true})
  };

  render() {
    const {type, view, icon, active, style, iconStyle, textStyle, multiline, numberOfLines, rightBar, barStyle, ...props} = this.props

    const defaultTextInput = StyleSheet.textInputs.default || {}
    const textInput = type ? StyleSheet.textInputs[type] || defaultTextInput : defaultTextInput

    // const androidMatchMarginBottom = Platform.OS ==='ios'? null : StyleSheet.androidMatchMarginBottom  // Hack
    // Need to break up the styling for find a nicer way of doing this. Aka. Hack
    const flex = type === 'alert' ?  0 : 1

    const touchable = (node) => {
      if(multiline === 'popup') {
        return (
          <TouchableHighlight onPress={this.onPress}
                  activeOpacity={'activeOpacity' in textInput ? textInput.activeOpacity : defaultTextInput.activeOpacity}
                  underlayColor={'underlayColor' in textInput ? textInput.underlayColor : defaultTextInput.underlayColor}>
            {node}
          </TouchableHighlight>
        )
      } else {
        return node
      }
    }

    return (
      <View style={{flex, zIndex: 1}}>
        {multiline === 'popup' && (<MultilineTextInputDialog
          visible={this.state.showPopup}
          onClose={() => this.setState({showPopup: false})}
          onSubmit={(value) => {
            if(this.props.onChangeText) {this.props.onChangeText(value)}
            if(this.props.onChange) {this.props.onChange()}
            this.setState({showPopup: false})
          }}
          {...props}
        />)}
        {touchable(
          <View style={{flex, flexDirection: 'row', alignItems: 'flex-end'}}>
            <View
              style={[
                defaultTextInput.style,
                textInput.style,
                style,
                this.props.error ? StyleSheet.textInputs.error : null,
                {flex: 1, marginBottom: 0}
              ]}
            >
              {icon && <Icon name={icon} active={active} style={[defaultTextInput.iconStyle, textInput.iconStyle, iconStyle]}/>}
              {view &&
                <Text style={[defaultTextInput.textStyle, textInput.textStyle, textStyle,]}>
                  {view}
                </Text> || (multiline === 'popup') &&
                <Text
                  style={[
                    StyleSheet.text,
                    defaultTextInput.textStyle,
                    textInput.textStyle,
                    defaultTextInput.staticTextStyle,
                    textInput.staticTextStyle,
                    this.props.textStyle,
                    !this.props.value && { color: this.props.placeholderTextColor || textInput.placeholderTextColor || defaultTextInput.placeholderTextColor },
                  ]}
                  numberOfLines={1}
                >
                  {this.props.value && this.props.value.replace(/\s+/g, ' ') || this.props.placeholder}
                </Text> ||
                <View style={[defaultTextInput.textContainerTextInput]}>
                  <Text
                    style={[
                      StyleSheet.text,
                      this.props.disabled && {color: this.props.placeholderTextColor || defaultTextInput.placeholderTextColor},
                      {flex: 0, paddingBottom: 3},
                    ]}
                  >{this.props.prefix}</Text>
                  <_TextInput
                    ref="input"
                    underlineColorAndroid="transparent"
                    style={[
                      StyleSheet.text,
                      defaultTextInput.textStyle,
                      textInput.textStyle,
                      textStyle,
                      this.props.disabled && {color: textInput.placeholderTextColor || defaultTextInput.placeholderTextColor},
                    ]}
                    placeholderTextColor={this.props.error ? StyleSheet.textInputs.errorPlaceholderColor : textInput.placeholderTextColor || defaultTextInput.placeholderTextColor}
                    selectionColor={textInput.selectionColor || defaultTextInput.selectionColor}
                    keyboardAppearance={textInput.keyboardAppearance || defaultTextInput.keyboardAppearance}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    editable={!this.props.disabled}
                    {...props}
                  />
                </View>
              }
            </View>
            {rightBar && <View style={[defaultTextInput.barStyle, textInput.barStyle, barStyle]}>{rightBar}</View>}
          </View>
        )}
        {this.props.autocomplete && (
          <View style={StyleSheet.textInputs.autocomplete.container}>
            {this.props.autocomplete.map(entry => (
              <TouchableHighlight
                style={StyleSheet.textInputs.autocomplete.row}
                key={entry.key}
                onPress={() => {
                  this.props.onAutocompletePress(entry)
                }}
              >
                <Text style={StyleSheet.textInputs.autocomplete.text}>
                  {entry.text}
                </Text>
              </TouchableHighlight>
            ))}
          </View>
        )}
      </View>
    )
  }
}
