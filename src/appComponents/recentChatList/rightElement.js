import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class RightComponent extends Component
{
    static propTypes = {
        unreadCount: PropTypes.number.isRequired,
        timeStamp: PropTypes.number.isRequired
    };

    /*
     * TODO
     * - Convert timestamp into human readable format and then
     *   pass to the rendering component
     *
     * - Hide badges when the value is `0`
     *
     * - Give badge the theme's primary colour. (Just a thought!)
     */

    render() {
        const {unreadCount, timeStamp} = this.props;

        return (
            <View>
                <View style={rightElement.timeStampWrapper}>
                    <Text style={rightElement.timeStamp}>{timeStamp}</Text>
                </View>
                <View style={rightElement.badgeWrapper}>
                    <View style={rightElement.badge}>
                        <Text style={rightElement.count}>{unreadCount}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const rightElement = StyleSheet.create({
    timeStampWrapper: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 4
    },
    badgeWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    badge: {
        backgroundColor: "gray",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        minWidth: 20,
        paddingLeft: 5,
        paddingRight: 5
    },
    count: {
        color: "black",
    }
});