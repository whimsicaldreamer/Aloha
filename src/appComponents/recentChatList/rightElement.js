import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {Badge} from 'react-native-elements';

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
     * - Make badge a circle when there is single digit and gradually
     *   make it pill shape when digits increase
     *
     * - Hide badges when the value is `0`
     *
     * - Give badge the theme's primary colour. (Just a thought!)
     */

    render() {
        const {unreadCount, timeStamp} = this.props;

        return (
            <View>
                <Badge value={unreadCount} />
                <View>
                    <Text style={rightElement.timeStamp}>{timeStamp}</Text>
                </View>
            </View>
        );
    }
}

const rightElement = StyleSheet.create({
    timeStamp: {
        paddingRight: 4
    }
});