import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

export default class ConversationListScreen extends Component
{
    static navigationOptions = {
        title: 'Hola',
    };
    render() {
        return (
            <View>
                <Text>Hello, Navigation</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}