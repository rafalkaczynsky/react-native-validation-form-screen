import React from 'react'
import {TouchableHighlight, View, Image} from 'react-native'

//import {showImagePicker} from '../utils/'
import StyleSheet from '../styles'
import {Icon} from './'

class AvatarEdit extends React.Component {

  render() {
    return (
      <TouchableHighlight
   //       onPress={() => showImagePicker(this.props.onChange)}
            style={[StyleSheet.avatarEdit.imageContainer, this.props.style]}
      >
        <View style={StyleSheet.avatarEdit.imageContainer}>
          {this.props.imageUrl ? (
            <Image
              style={StyleSheet.avatarEdit.image}
              source={{uri: this.props.imageUrl}}
            />
          ) : (
            <View style={StyleSheet.avatarEdit.image} />
          )}
          <View style={StyleSheet.avatarEdit.imageTintOverlay} />
          <Icon style={StyleSheet.avatarEdit.imageIconOverlay} name="camera" />
        </View>
      </TouchableHighlight>
    )
  }
}

AvatarEdit.propTypes = {
//  onChange: React.PropTypes.func.isRequired,
  imageUrl: React.PropTypes.string,
}

export default AvatarEdit