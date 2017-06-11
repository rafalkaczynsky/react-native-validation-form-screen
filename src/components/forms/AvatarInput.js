import React from 'react'

import {AvatarEdit} from '../'
import StyleSheet from '../../styles'

const renderAvatarInput = ({
  input: {value, onChange},
  imageUrl,
  meta: {touched, error, warning}
}) => {
  return (
    <AvatarEdit
      onChange={onChange}
      imageUrl={value}
      style={StyleSheet.singleMargin}
    />
  )
}

export default renderAvatarInput