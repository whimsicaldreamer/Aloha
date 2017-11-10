import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import moment from 'moment';

export default class TimeStamp extends Component
{
    static propTypes = {
        messageTime: PropTypes.number.isRequired
    };

    //Convert timestamp into human readable format
    readableTimestamp = ({messageTime}) => {
        let readableTime;
        readableTime = moment.unix(messageTime).calendar(null, {
            sameDay: function(now) {
                if (Math.abs(this.diff(now) / 1000) < 600) {
                    return '[' + this.fromNow() + ']';
                } else {
                    return 'HH:MM';
                }
            },
            lastDay: '[YESTERDAY]',
            lastWeek: 'DD/MM/YYYY',
            sameElse: 'DD/MM/YYYY'
        });
        return readableTime;
    };

    render() {
        const {messageTime} = this.props;

        return (
            <View style={timestamp.timeStampWrapper}>
                <Text style={timestamp.text}>
                    {this.readableTimestamp({messageTime})}
                </Text>
            </View>
        );
    }
}

const timestamp = StyleSheet.create({
    timeStampWrapper: {
        marginLeft: 10,
    },
    text: {
        fontSize: 12,
        lineHeight: 20
    }
});