import { AsyncStorage } from 'react-native'
import AppConfig from "./AppConfig";

function saveAccessToken(token) {
  AppConfig.ACCESS_TOKEN = token;
  AsyncStorage.setItem('token_saved', 'true');
}

async function getAccessToken() {
  const token =  await AsyncStorage.getItem('token_saved');

  return token=='true'? true: false;
}

function removeAccessToken() {
  AppConfig.ACCESS_TOKEN = '';
  AsyncStorage.setItem('token_saved', 'false');
}

export {saveAccessToken, getAccessToken, removeAccessToken}