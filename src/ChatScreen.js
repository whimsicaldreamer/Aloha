import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}