import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Unread extends Component
{
    static propTypes = {
        count: PropTypes.number.isRequired,
        theme: PropTypes.object.isRequired
    };

    generateBadge = ({count, theme}) => {
        let badge;
        if(count > 0) {
            badge = (
                <View style={[unreadCount.badge, theme.unreadCount.unreadBadgeColor]}>
                    <Text style={theme.unreadCount.count}>
                        {count}
                    </Text>
                </View>
            );
        }
        return badge;
    };

    render() {
        const {count, theme} = this.props;

        return (
            <View>
                {this.generateBadge({count, theme})}
            </View>
        );
    }
}

const unreadCount = StyleSheet.create({
    badge: {
        marginLeft: 10,
        borderRadius: 50,
        height: 22,
        minWidth: 22,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});