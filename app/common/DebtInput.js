import React, { Component } from "react";
import { TextInput } from "react-native";
import ScaledSheet from "../libs/reactSizeMatter/ScaledSheet";
import { CommonColors } from "../commonStyles/commonStyles";

class DebtInput extends Component {
  render() {
    return (
      <TextInput style={styles.textInput}
                 keyboardType={this.props.keyboardType}
                 onChangeText={(value) => this.props.changeParams(value)}
                 placeholderTextColor='#cfd0d1'
                 underlineColorAndroid='transparent'
                 defaultValue = {this.props.defaultValue}
      />
    )
  }
}

export default DebtInput;


const styles = ScaledSheet.create({
  textInput: {
    backgroundColor: CommonColors.textInput,
    width: '300@s',
    color: CommonColors.mainText
  },
})