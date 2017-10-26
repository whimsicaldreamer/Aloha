import React, { Component }  from 'react';
import {
    StatusBar,
    Platform
} from 'react-native';
import StatusBarSizeIOS from 'react-native-status-bar-size';

const getStatusBarHeight = () => {
    return Platform.select({
        ios: StatusBarSizeIOS.currentHeight,
        android: StatusBar.currentHeight
    });
};

export { getStatusBarHeight };