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
    },
    listItem: {
        contentViewContainer: {
            backgroundColor: COLOR.red100
        },
        leftElementContainer: {
            backgroundColor: COLOR.yellow500,
            width: 50
        },
        centerElementContainer: {
            backgroundColor: COLOR.blue100,
        },
        rightElementContainer: {
            backgroundColor: COLOR.red900,
            marginRight: 12
        }
    }
};