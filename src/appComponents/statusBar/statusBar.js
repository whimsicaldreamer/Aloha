import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StatusBar,
    Platform
} from 'react-native';
import StatusBarSizeIOS from 'react-native-status-bar-size';

export default class CustomStatusBar extends Component
{
    static propTypes = {
        themeColor: PropTypes.string.isRequired
    };

    getHeight = () => {
        return Platform.select({
            ios: StatusBarSizeIOS.currentHeight,
            android: StatusBar.currentHeight
        });
    };

    render() {
        const {themeColor} = this.props;

        return (
            <View style={{ backgroundColor: themeColor, height: this.getHeight() }}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
            </View>
        );
    }
}