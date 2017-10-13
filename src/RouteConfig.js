import { StackNavigator } from 'react-navigation';
import ConversationListScreen from './ConversationListScreen';
import ChatScreen from './ChatScreen';

export const Hola = StackNavigator({
    ConversationList: { screen: ConversationListScreen },
    Chat: { screen: ChatScreen },
});