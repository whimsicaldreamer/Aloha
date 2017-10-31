import { COLOR } from 'react-native-material-ui';

export default uiTheme = {
    palette: {
        primaryColor: COLOR.green500
    },
    toolbar: {
        container: {
            height: 56
        }
    },
    button: {
        container: {
            position: 'absolute',
            height: 55,
            minWidth: 55,
            bottom: 20,
            right: 20
        },
        buttonStyle: {
            height: 55,
            minWidth: 55,
            backgroundColor: COLOR.lightBlue500,
            paddingHorizontal: 16
        }
    }
};