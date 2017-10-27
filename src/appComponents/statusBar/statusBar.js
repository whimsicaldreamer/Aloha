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
        themeColor: PropTypes.string.isRequired
    };

    render() {
        const {themeColor} = this.props;

        return (
            <View style={{ backgroundColor: themeColor, height: getStatusBarHeight() }}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
            </View>
        );
    }
}