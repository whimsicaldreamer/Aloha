import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import RecentChatListScreen from './RecentChatListScreen';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';
import DrawerScreen from './DrawerScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AllRoutes = StackNavigator({
    Home: {
        screen: RecentChatListScreen,
        navigationOptions: {
            title: 'Hola',
            headerLeft: (
                <Icon name="menu" size={30}/>
            )
        }
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            title: 'Chat with Lucy'
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: "My Profile"
        }
    }
});

export const HolaApp = DrawerNavigator({
    App: { screen: AllRoutes },
}, {
    contentComponent: DrawerScreen,
    drawerWidth: 300
});