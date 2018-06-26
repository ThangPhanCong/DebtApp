import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import ScaledSheet from "../../libs/reactSizeMatter/ScaledSheet";
import { CommonColors, CommonStyles } from "../../commonStyles/commonStyles";
import { getListAdmin } from '../../../databases/Queries';
import DebtInput from "../../common/DebtInput";

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

  async _getListAdmin() {
    const listAdmin = await getListAdmin('Admin');
    let parserListAdmin = [];

    for(let i in listAdmin.length) {
      parserListAdmin.push(listAdmin[i])
    }

    this.setState({listAdmin: parserListAdmin})
  }

  _changeParamsLogin(value, title) {
    const { paramsLogin } = this.state;

    paramsLogin[`${title}`] = value;

    console.log('okmen', paramsLogin)
    this.setState({ paramsLogin })
  }

  _onLogin() {
    const { paramsLogin, listAdmin } = this.state;

    console.log("paramsLogin", paramsLogin)
    const checkParamsLogin = listAdmin.includes(paramsLogin);

    if(checkParamsLogin) {
      this.props.navigation.navigate('RegisterScreen')
    } else {
      console.log('UserName False')
    }
  }

  render() {
    const { navigation } = this.props;

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
          <DebtInput changeParams={(value) => this._changeParamsLogin(value, 'userName')}/>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.titleLogin}>Mật khẩu:</Text>
          <DebtInput changeParams={(value) => this._changeParamsLogin(value, 'password')}
                     keyboardType={'numeric'}
          />
        </View>

        <TouchableWithoutFeedback onPress={() => this._onLogin()}>
          <View style={styles.buttonLoginContainer}>
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