import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import TimeStamp from './timeStamp';
import Unread from './unreadCount';
import { COLOR } from 'react-native-material-ui';

export default class CenterComponent extends Component
{
    static propTypes = {
        primaryText: PropTypes.string.isRequired,
        secondaryText: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        unreadCount: PropTypes.number.isRequired
    };

    render() {
        const {primaryText, secondaryText, timestamp, unreadCount} = this.props;

        return (
            <View>
                <View style={centerElement.primaryContainer}>
                    <View style={centerElement.primaryTextWrapper}>
                        <Text style={centerElement.primaryText} numberOfLines={1}>
                            {primaryText}
                        </Text>
                    </View>
                    <TimeStamp messageTime={timestamp}/>
                </View>

                <View style={centerElement.secondaryContainer}>
                    <View style={centerElement.secondaryTextWrapper}>
                        <Text style={centerElement.secondaryText} numberOfLines={1}>
                            {secondaryText}
                        </Text>
                    </View>
                    <Unread count={unreadCount}/>
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
    primaryText: {
        fontSize: 16,
        fontWeight: '500',
        color: COLOR.blueGrey700,
        lineHeight: 24,
    },
    secondaryContainer: {
        flexDirection: 'row'
    },
    secondaryTextWrapper: {
        flex: 1,
    },
    secondaryText: {
        fontSize: 14,
        fontWeight: '400',
        color: COLOR.blueGrey500,
        lineHeight: 22
    }
});