import React, { Component } from "react";
import { View, Text } from "react-native";
import { getAccessToken } from "../utils/AppPreferences";

class SplashScreen extends Component {
  componentWillMount() {
    this._getAccesToken();
  }

  async _getAccesToken() {
    const token = await getAccessToken();

    if (token) {
      this.props.navigation.navigate('MainScreen')
    } else {
      this.props.navigation.navigate('LoginScreen')
    }
  }
  render() {
    return (
      <View>
        <Text>Splash</Text>
      </View>
    )
  }
}

export default SplashScreen;