import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { ThemeProvider, Toolbar } from 'react-native-material-ui';
import CustomStatusBar from '../statusBar/statusBar'
import uiTheme from '../../themes/defaultTheme';

export default class chatScreen extends Component
{
    render() {

        const {params} = this.props.navigation.state;

        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View>
                    <CustomStatusBar themeColor={uiTheme.palette.primaryColor} />
                    <View>
                        <Toolbar
                            leftElement="arrow-back"
                            centerElement={params.userName}
                            onLeftElementPress={() => this.props.navigation.goBack()}
                        />
                        <Text>This is the chat screen</Text>
                    </View>
                </View>
            </ThemeProvider>
        );
    }
}