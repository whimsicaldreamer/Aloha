import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ConversationListScreen extends Component
{
    static navigationOptions = {
        title: 'Hola',
        headerLeft: <Icon name="menu" size={24}/>,
        headerRight: <Icon name="search" size={24}/>
    };
    render() {
        return (
            <View>
            </View>
        );
    }
}