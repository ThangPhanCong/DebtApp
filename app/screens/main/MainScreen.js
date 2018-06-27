import React, { Component } from "react";
import { Text, TouchableWithoutFeedback,View, Image } from "react-native";
import { CommonStyles } from "../../commonStyles/commonStyles";
import { removeAccessToken } from "../../utils/AppPreferences";
import ScaledSheet from "../../libs/reactSizeMatter/ScaledSheet";
import {scale} from "../../libs/reactSizeMatter/scalingUtils";

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Main',
    headerStyle: CommonStyles.header,
    headerTitleStyle: CommonStyles.headerTitle,
    headerLeft: null,
    headerRight: (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('NewVillageScreen')}>
        <Image
          resizeMode={'contain'}
          style={{ marginLeft: scale(12), width: scale(15), height: scale(15) }}
          source={require('../../../assets/back/back.png')}
        />
      </TouchableWithoutFeedback>
    )
  });

  async _onLogout() {
    await removeAccessToken();
    this.props.navigation.navigate('LoginScreen')
  }
  render() {
    return (
      <View style={styles.screen}>
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

const styles = ScaledSheet.create({
  screen: {
    ...CommonStyles.screen
  }
})