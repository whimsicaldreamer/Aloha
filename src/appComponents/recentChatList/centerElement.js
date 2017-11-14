import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import TimeStamp from './timeStamp';
import Unread from './unreadCount';

export default class CenterComponent extends Component
{
    static propTypes = {
        primaryText: PropTypes.string.isRequired,
        secondaryText: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        unreadCount: PropTypes.number.isRequired,
        theme: PropTypes.object.isRequired
    };

    render() {
        const {primaryText, secondaryText, timestamp, unreadCount, theme} = this.props;

        return (
            <View>
                <View style={centerElement.primaryContainer}>
                    <View style={centerElement.primaryTextWrapper}>
                        <Text style={theme.centerElement.primaryText} numberOfLines={1}>
                            {primaryText}
                        </Text>
                    </View>
                    <TimeStamp messageTime={timestamp} theme={theme}/>
                </View>

                <View style={centerElement.secondaryContainer}>
                    <View style={centerElement.secondaryTextWrapper}>
                        <Text style={theme.centerElement.secondaryText} numberOfLines={1}>
                            {secondaryText}
                        </Text>
                    </View>
                    <Unread count={unreadCount} theme={theme}/>
                </View>
            </View>
        );
    }
}

const centerElement = StyleSheet.create({
    primaryContainer: {
        flexDirection: 'row',
    },
    primaryTextWrapper: {
        flex: 1,
    },
    secondaryContainer: {
        flexDirection: 'row'
    },
    secondaryTextWrapper: {
        flex: 1,
    }
});