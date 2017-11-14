import { COLOR } from 'react-native-material-ui';

export default uiTheme = {
    palette: {
        primaryColor: COLOR.white
    },
    toolbar: {
        container: {
            height: 56,
            borderColor: 'black'
        },
        leftElement: {
            color: COLOR.grey600
        },
        titleText: {
            color: COLOR.grey600
        },
        rightElement: {
            color: COLOR.grey600
        }
    },
    button: {
        container: {
            position: 'absolute',
            height: 55,
            minWidth: 55,
            bottom: 20,
            right: 0
        },
        buttonStyle: {
            height: 55,
            minWidth: 55,
            backgroundColor: COLOR.deepPurple500,
            paddingHorizontal: 16
        }
    },
    listItem: {
        leftElementContainer: {
            width: 50
        }
    }
};