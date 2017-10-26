import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { ThemeProvider, Toolbar } from 'react-native-material-ui';
import CustomStatusBar from '../statusBar/statusBar'
import uiTheme from '../../themes/defaultTheme';

export default class profileScreen extends Component
{
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
            <View>
                <CustomStatusBar themeColor={uiTheme.palette.primaryColor} />
                <View>
                    <Toolbar
                        leftElement="arrow-back"
                        centerElement="Profile Name"
                        onLeftElementPress={() => this.props.navigation.goBack()}
                    />
                    <Text>This is the profile screen for respective users</Text>
                </View>
            </View>
            </ThemeProvider>
        );
    }
}