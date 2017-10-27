import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { getStatusBarHeight } from "../../utils/";

export default class drawerScreen extends Component
{
    render() {
        return (
            <View>
                <View style={{ height: getStatusBarHeight() }}/>
                <Text>This is the drawer menu.</Text>
                <Button title="Profile"  onPress={() => this.props.navigation.navigate('Profile')}/>
            </View>
        );
    }
}