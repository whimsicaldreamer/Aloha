import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StatusBar,
    Platform
} from 'react-native';

export default class CustomStatusBar extends Component
{
    static propTypes = {
        themeColor: PropTypes.string.isRequired
    };

    render() {
        const {themeColor} = this.props;

        return (
            <View>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                <View style={{ backgroundColor: themeColor, height: StatusBar.currentHeight}} />
            </View>
        );
    }
}