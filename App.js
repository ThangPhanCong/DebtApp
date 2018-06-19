import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, Button} from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import {addDebtor} from "./databases/Queries";
import uuidv1 from 'uuid/v1';

export default class App extends React.Component {
  state = {
    name: null,
    village: null
  }

  _changeInforDebtor(value, title) {
    this.setState({[title]: value});
  }

  async _onNewDebtor() {
    const {name, village} = this.state;
    console.log("alo", uuidv1())
    const params = {name, village, id: uuidv1()};
    await addDebtor(params);
    console.log("dmdmdmdmdm")
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.popupDialog.show()}>
          <Text>AddDebtors</Text>
        </TouchableWithoutFeedback>
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
