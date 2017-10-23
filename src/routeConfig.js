import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import recentChatListScreen from './appComponents/recentChatList/recentChatListScreen';
import chatScreen from './appComponents/chat/chatScreen';
import profileScreen from './appComponents/profile/profileScreen';
import drawerScreen from './appComponents/drawer/drawerScreen';

const AllRoutes = StackNavigator({
    Home: {
        screen: recentChatListScreen,
        headerMode: 'screen',
        navigationOptions: {
            header: null
        },
    },
    Chat: {
        screen: chatScreen,
        navigationOptions: {
            title: 'chat with Lucy'
        }
    },
    Profile: {
        screen: profileScreen,
        navigationOptions: {
            title: "My profile"
        }
    }
});

export const Aloha = DrawerNavigator({
    App: { screen: AllRoutes },
}, {
    contentComponent: drawerScreen,
    drawerWidth: 300
});