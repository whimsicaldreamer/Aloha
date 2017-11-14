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
    toolbarSearchActive: {
        leftElement: {
            color: COLOR.grey600
        },
        titleText: {
            color: COLOR.green600
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
    },
    profilePic: {
        container: {
            backgroundColor: COLOR.blueGrey400
        }
    },
    centerElement: {
        primaryText: {
            fontSize: 16,
            fontWeight: '500',
            color: COLOR.blueGrey700,
            lineHeight: 24,
        },
        secondaryText: {
            fontSize: 14,
            fontWeight: '400',
            color: COLOR.blueGrey500,
            lineHeight: 22
        }
    },
    unreadCount: {
        unreadBadgeColor: {
            backgroundColor: COLOR.purple500
        },
        count: {
            color: 'white',
            fontWeight: '500'
        }
    },
    timestamp: {
        text: {
            fontSize: 12,
            color: COLOR.blueGrey400,
            lineHeight: 20,
        }
    }
};