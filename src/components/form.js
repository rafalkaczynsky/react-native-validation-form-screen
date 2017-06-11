import React from 'react'
import {ScrollView, TouchableWithoutFeedback, View} from 'react-native'

export default class Form extends React.Component {

  render() {
    return (
      <ScrollView
        {...this.props}
        keyboardShouldPersistTaps="always"
        ref="scrollRef"
      >
        <TouchableWithoutFeedback>
          <View style={{flex: 1}}>
            {this.props.children}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    )
  }
}
