import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StatusBar,
    Animated
} from 'react-native';
import { getStatusBarHeight } from "../../utils";

export default class CustomStatusBar extends Component
{
    static propTypes = {
        themeColor: PropTypes.string.isRequired,
        elevation: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.object
        ].isRequired)
    };

    render() {
        const {themeColor, elevation} = this.props;

        return (
            <Animated.View style={{ backgroundColor: themeColor, height: getStatusBarHeight(), elevation: elevation }}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.05)" translucent />
            </Animated.View>
        );
    }
}