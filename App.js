import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import { addDebtor, newAdmin, getListAdmin } from "./databases/Queries";
import uuidv1 from 'uuid/v1';

export default class App extends React.Component {
  state = {
    name: null,
    village: null
  }

  _changeInforDebtor(value, title) {
    this.setState({ [title]: value });
  }

  _changeInforAdmin(value, title) {
    this.setState({ [title]: value });
  }

  async _onNewDebtor() {
    const { name, village } = this.state;
    const params = { name, village, id: uuidv1() };

    await addDebtor(params);
  }

  async _onNewAdmin() {
    const { nameAdmin, passwordAdmin } = this.state;
    const params = { nameAdmin, passwordAdmin, idAdmin: uuidv1() };

    await newAdmin(params);
  }


  componentDidMount() {
    this._getListAdmin();
  }

  async _getListAdmin() {
    let responseAdmin = await getListAdmin('Admin');
    for (let p of responseAdmin) {
      console.log(`ad la:   ${p.name}`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>


        </View>
        <TouchableWithoutFeedback onPress={() => this.popupDialog.show()}>
          <Text>AddDebtors</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.popupDialogAdmin.show()}>
          <Text>NewAdmin</Text>
        </TouchableWithoutFeedback>
        <PopupDialog
          ref={(popupDialog) => {
            this.popupDialogAdmin = popupDialog;
          }}
        >
          <View>
            <TextInput placeholder={'nameAdmin'} onChangeText={(value) => this._changeInforAdmin(value, 'nameAdmin')}/>
            <TextInput placeholder={'passwordAdmin'}
                       onChangeText={(value) => this._changeInforAdmin(value, 'passwordAdmin')}/>
            <Button title={'Submit'} onPress={() => this._onNewAdmin()}/>
          </View>
        </PopupDialog>

        <PopupDialog
          ref={(popupDialog) => {
            this.popupDialog = popupDialog;
          }}
        >
          <View>
            <TextInput placeholder={'name'} onChangeText={(value) => this._changeInforDebtor(value, 'name')}/>
            <TextInput placeholder={'village'} onChangeText={(value) => this._changeInforDebtor(value, 'village')}/>
            <Button title={'Submit'} onPress={() => this._onNewDebtor()}/>
          </View>
        </PopupDialog>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
