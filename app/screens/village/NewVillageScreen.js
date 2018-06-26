import React, {Component} from "react";
import {View, Text} from "react-native";
import BackButton from "../../common/BackButton";
import ScaledSheet from "../../libs/reactSizeMatter/ScaledSheet";
import {CommonStyles} from "../../commonStyles/commonStyles";

class NewVillageScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Đăng ký',
        headerStyle: CommonStyles.header,
        headerTitleStyle: CommonStyles.headerTitle,
        headerLeft: (
          <BackButton navigation={navigation}/>
        )
      });

    render() {
        return(
            <View style={styles.screen}>
                <Text>
                    Village
                </Text>
            </View>
        )
    }
}

export default NewVillageScreen;

const styles = ScaledSheet.create({
    screen: {
      ...CommonStyles.screen,
      alignItems: 'center',
      justifyContent: 'center',
    },
})