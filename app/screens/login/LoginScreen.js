import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import ScaledSheet from "../../libs/reactSizeMatter/ScaledSheet";
import { CommonColors, CommonStyles } from "../../commonStyles/commonStyles";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.titleLogin}>UserName</Text>
          <TextInput style={styles.textInput}
                     placeholderTextColor='#cfd0d1'
                     underlineColorAndroid='transparent'
          />
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.titleLogin}>Password</Text>
          <TextInput style={styles.textInput}
            // secureTextEntry={!this.state.showPassword}
                     placeholderTextColor='#cfd0d1'
                     underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.buttonLoginContainer}>
          <Text style={styles.buttonLogin}>
            Login
          </Text>
        </View>
      </View>
    )
  }
}

export default LoginScreen;


const styles = ScaledSheet.create({
  screen: {
    ...CommonStyles.screen,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleLogin: {
    color: CommonColors.mainText,
    paddingBottom: '10@s'
  },
  textInput: {
    backgroundColor: CommonColors.textInput,
    width: '300@s',
    color: CommonColors.mainText
  },
  buttonLoginContainer: {
    backgroundColor: CommonColors.buttonBgSubmit,
    width: '300@s',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40@s',
    marginTop: '15@s'
  },
  buttonLogin: {
    fontSize: '14@s',
    color: CommonColors.mainText
  }
})