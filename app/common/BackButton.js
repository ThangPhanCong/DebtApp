import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { scale } from "../libs/reactSizeMatter/scalingUtils";

class BackButton extends React.Component {

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
        <Image
          resizeMode={'contain'}
          style={{ marginLeft: scale(12), width: scale(15), height: scale(15) }}
          source={require('../../assets/back/back.png')}
        />
      </TouchableWithoutFeedback>
    )
  }
}

export default BackButton