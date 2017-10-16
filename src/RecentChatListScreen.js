import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class RecentChatListScreen extends Component
{
    render() {
        return (
            <View>
                <Text>List of recent chats.</Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="Open Side Nav"/>
                <Button onPress={() => this.props.navigation.navigate('Chat')} title="Go to Chat"/>
            </View>
        );
    }
}