import React, { Component } from "react";
import { Text, TouchableWithoutFeedback,View } from "react-native";
import { CommonStyles } from "../../commonStyles/commonStyles";
import { removeAccessToken } from "../../utils/AppPreferences";

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Main',
    headerStyle: CommonStyles.header,
    headerTitleStyle: CommonStyles.headerTitle,
    headerLeft: null
  });

  async _onLogout() {
    await removeAccessToken();
    this.props.navigation.navigate('LoginScreen')
  }
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this._onLogout()}>
          <View>
            <Text>Logout</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

    )
  }
}

export default MainScreen;