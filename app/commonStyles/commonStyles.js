import { scale } from "../libs/reactSizeMatter/scalingUtils";

const CommonColors = {
  screenBgColor: '#10121e',
  headerBarBgColor: '#232a3b',
  headerTitleColor: '#b1b6c3',
  toolbarBgColor: '#232A3C',
  mainText: '#FFF',
  textInput: '#3e424a',
  buttonBgSubmit: '#0090eb',
}

const CommonStyles = {
  screen: {
    flex: 1,
    backgroundColor: CommonColors.screenBgColor
  },
  header: {
    backgroundColor: CommonColors.headerBarBgColor,
    elevation: 0,
    height: scale(44),
    borderBottomWidth: 0
  },
  headerTitle: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: scale(16),
    color: CommonColors.headerTitleColor
  },
}


export { CommonColors, CommonStyles };