import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import moment from 'moment';

export default class RightComponent extends Component
{
    static propTypes = {
        unreadCount: PropTypes.number.isRequired,
        timeStamp: PropTypes.number.isRequired
    };

    /*
     * Convert timestamp into human readable format
     */
    readableTimestamp = ({timeStamp}) => {
        let readableTime;
        readableTime = moment.unix(timeStamp).calendar(null, {
            sameDay: function(now) {
                if (Math.abs(this.diff(now) / 1000) < 600) {
                    return '[' + this.fromNow() + ']';
                } else {
                    return 'HH:MM';
                }
            },
            lastDay: '[Yesterday]',
            lastWeek: 'DD/MM/YYYY',
            sameElse: 'DD/MM/YYYY'
        });
        return readableTime;
    };
    /*
     * TODO
     *
     * - Hide badges when the value is `0`
     *
     * - Give badge the theme's primary colour. (Just a thought!)
     *
     * - Arrange list items depending on timestamp
     */

    render() {
        const {unreadCount, timeStamp} = this.props;

        return (
            <View>
                <View style={rightElement.timeStampWrapper}>
                    <Text style={rightElement.timeStamp}>{this.readableTimestamp({timeStamp})}</Text>
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
    timeStamp: {
        fontSize: 12
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