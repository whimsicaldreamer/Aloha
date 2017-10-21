import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import RecentChatListScreen from './appComponents/RecentChatList/RecentChatListScreen';
import ChatScreen from './appComponents/Chat/ChatScreen';
import ProfileScreen from './appComponents/Profile/ProfileScreen';
import DrawerScreen from './appComponents/Drawer/DrawerScreen';

const AllRoutes = StackNavigator({
    Home: {
        screen: RecentChatListScreen,
        headerMode: 'screen',
        navigationOptions: {
            header: null
        },
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