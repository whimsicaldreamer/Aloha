import { StackNavigator, DrawerNavigator } from 'react-navigation';
import RecentChatListScreen from './RecentChatListScreen';
import ProfileScreen from './ProfileScreen';
import ChatScreen from './ChatScreen';

const HomeScreenNavigator = DrawerNavigator({
    Home: { screen: RecentChatListScreen },
    Profile: { screen: ProfileScreen },
});

export const HolaApp = StackNavigator ({
    Home: {
        screen: HomeScreenNavigator,
        navigationOptions: {
            title: 'Hola'
        }
    },
    Chat: { screen: ChatScreen }
});