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

    //Convert timestamp into human readable format
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

    // Hide badges when the value of unreadCount is `0`
    generateBadge = ({unreadCount}) => {
        let badge;
        if(unreadCount > 0) {
            badge = (
                <View style={rightElement.badgeWrapper}>
                    <View style={rightElement.badge}>
                        <Text style={rightElement.count}>{unreadCount}</Text>
                    </View>
                </View>
            );
        }
        return badge;
    };

    render() {
        const {unreadCount, timeStamp} = this.props;

        return (
            <View>
                <View style={rightElement.timeStampWrapper}>
                    <Text style={rightElement.timeStamp}>{this.readableTimestamp({timeStamp})}</Text>
                </View>
                {this.generateBadge({unreadCount})}
            </View>
        );
    }
}

const rightElement = StyleSheet.create({
    timeStampWrapper: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    timeStamp: {
        fontSize: 12
    },
    badgeWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 4,
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