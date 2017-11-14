import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { COLOR } from 'react-native-material-ui';

export default class Unread extends Component
{
    static propTypes = {
        count: PropTypes.number.isRequired
    };

    generateBadge = ({count}) => {
        let badge;
        if(count > 0) {
            badge = (
                <View style={unreadCount.badge}>
                    <Text style={unreadCount.count}>
                        {count}
                    </Text>
                </View>
            );
        }
        return badge;
    };

    render() {
        const {count} = this.props;

        return (
            <View>
                {this.generateBadge({count})}
            </View>
        );
    }
}

const unreadCount = StyleSheet.create({
    badge: {
        backgroundColor: COLOR.purple500,
        marginLeft: 10,
        borderRadius: 50,
        height: 22,
        minWidth: 22,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    count: {
        color: 'white',
        fontWeight: '500'
    }
});