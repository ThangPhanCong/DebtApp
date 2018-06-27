import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import ScaledSheet from "../../libs/reactSizeMatter/ScaledSheet";
import { CommonColors, CommonStyles } from "../../commonStyles/commonStyles";
import { getListAdmin } from '../../../databases/Queries';
import DebtInput from "../../common/DebtInput";
import { saveAccessToken } from '../../utils/AppPreferences';
import { withNavigationFocus } from 'react-navigation';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    paramsLogin: {},
    listAdmin: []
  }

  componentDidMount() {
    this._getListAdmin();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isFocused && this.props.isFocused) {
      this._getUser();
      this._getListAdmin();
    }
  }

  async _getListAdmin() {
    const listAdmin = await getListAdmin('Admin');
    let parserListAdmin = [];

    const parseJsonList = JSON.parse(JSON.stringify(listAdmin));

    for (let i = 0; i < Object.keys(parseJsonList).length; i++) {
      parserListAdmin.push(parseJsonList[i])
    }

    this.setState({ listAdmin: parserListAdmin })
  }

  _changeParamsLogin(value, title) {
    const { paramsLogin } = this.state;

    paramsLogin[`${title}`] = value;
    this.setState({ paramsLogin })
  }

  async _onLogin() {
    const { paramsLogin, listAdmin } = this.state;
    const findUser = listAdmin.find(item => item.name === paramsLogin.userName && item.password === paramsLogin.password);
    console.log("findUser", findUser, listAdmin)

    if (findUser) {
      await saveAccessToken(findUser.id)
      this.props.navigation.navigate('MainScreen')
    } else {
      console.log('UserName False')
    }
  }
  _getUser() {
    const { navigation } = this.props;
    if (navigation.state.params) {
      this.setState({
        paramsLogin: {
          userName: navigation.state.params.userName,
          password: navigation.state.params.password
        }
      })
    } 
  }
  render() {
    const { navigation } = this.props;
    const { paramsLogin } = this.state;
    const isDisabled = !paramsLogin.userName || !paramsLogin.password;
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
          <DebtInput
            changeParams={(value) => this._changeParamsLogin(value, 'userName')}
            defaultValue={paramsLogin.userName}
          />
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.titleLogin}>Mật khẩu:</Text>
          <DebtInput changeParams={(value) => this._changeParamsLogin(value, 'password')}
            keyboardType={'numeric'}
            defaultValue={paramsLogin.password}
          />
        </View>

        <TouchableWithoutFeedback onPress={isDisabled ? null : () => this._onLogin()}>
          <View
            style={[styles.buttonLoginContainer, isDisabled ? styles.buttonLoginDisabled : styles.buttonLoginEnabled]}>
            <Text style={styles.buttonLogin}>
              Đăng nhập
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.viewHaveAccount}>
          <Text style={styles.isHaveAccount}>
            Bạn đã có tài khoản chưa?
          </Text>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('RegisterScreen')}>
            <View>
              <Text style={styles.textRegister}>Đăng ký</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

export default withNavigationFocus(LoginScreen);


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
  buttonLoginContainer: {
    width: '300@s',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40@s',
    marginTop: '15@s'
  },
  buttonLoginDisabled: {
    backgroundColor: CommonColors.secondaryText
  },
  buttonLoginEnabled: {
    backgroundColor: CommonColors.buttonBgSubmit,
  },
  buttonLogin: {
    fontSize: '14@s',
    color: CommonColors.mainText
  },
  imgLogo: {
    width: '150@s',
    height: '150@s',
  },
  isHaveAccount: {
    color: CommonColors.mainText
  },
  textRegister: {
    color: CommonColors.buttonBgSubmit,
    paddingLeft: '10@s'
  },
  viewHaveAccount: {
    flexDirection: 'row',
    marginTop: '40@s'
  }
})