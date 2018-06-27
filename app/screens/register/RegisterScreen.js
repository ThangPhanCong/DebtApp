import React, { Component } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { CommonColors, CommonStyles } from "../../commonStyles/commonStyles";
import BackButton from "../../common/BackButton";
import DebtInput from "../../common/DebtInput";
import ScaledSheet from "../../libs/reactSizeMatter/ScaledSheet";
import  uuidv1  from "uuid/v1";
import { newAdmin } from "../../../databases/Queries";

class RegisterScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Đăng ký',
    headerStyle: CommonStyles.header,
    headerTitleStyle: CommonStyles.headerTitle,
    headerLeft: (
      <BackButton navigation={navigation}/>
    )
  });

  state = {
    paramsRegister: {},
  }

  async _onRegister() {
    console.log("register");
    const { paramsRegister } = this.state;
    try {
      paramsRegister['id'] = uuidv1();
      await newAdmin(paramsRegister);
    } catch (err) {
      console.log("Register._error:", err)
    }
    this.props.navigation.navigate('LoginScreen', {userName: paramsRegister.userName, password: paramsRegister.password})
  }

  _changeParamsRegister(value, title) {
    const { paramsRegister } = this.state;

    paramsRegister[`${title}`] = value;
    this.setState({ paramsRegister })
  }

  render() {
    return (
      <View style={styles.screen}>
        <View>
          <Image
            resizeMode={'contain'}
            style={styles.imgLogo}
            source={require('../../../assets/logo/logo.png')}
          />
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.titleLogin}>Tên người dùng:</Text>
          <DebtInput changeParams={(value) => this._changeParamsRegister(value, 'userName')}/>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.titleLogin}>Mật khẩu:</Text>
          <DebtInput changeParams={(value) => this._changeParamsRegister(value, 'password')}
                     keyboardType={'numeric'}
          />
        </View>

        <TouchableWithoutFeedback onPress={() => this._onRegister()}>
          <View style={styles.buttonRegisterContainer}>
            <Text style={styles.buttonRegister}>
              Đăng ký
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default RegisterScreen;

const styles = ScaledSheet.create({
  screen: {
    ...CommonStyles.screen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLogin: {
    color: CommonColors.mainText,
    paddingBottom: '10@s'
  },
  imgLogo: {
    width: '150@s',
    height: '150@s',
  },
  buttonRegisterContainer: {
    backgroundColor: CommonColors.buttonBgSubmit,
    width: '300@s',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40@s',
    marginTop: '15@s',
    marginBottom: '70@s'
  },
  buttonRegister: {
    fontSize: '14@s',
    color: CommonColors.mainText
  },
})