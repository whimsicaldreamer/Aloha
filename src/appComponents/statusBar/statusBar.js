import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StatusBar
} from 'react-native';
import { getStatusBarHeight } from "../../utils";

export default class CustomStatusBar extends Component
{
    static propTypes = {
        themeColor: PropTypes.string.isRequired,
        elevation: PropTypes.number.isRequired
    };

    render() {
        const {themeColor, elevation} = this.props;

        return (
            <View style={{ backgroundColor: themeColor, height: getStatusBarHeight(), elevation: elevation }}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.05)" translucent />
            </View>
        );
    }
}