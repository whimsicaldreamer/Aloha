import React, { Component }  from 'react';
import { View } from 'react-native';
import {Avatar} from 'react-native-elements';
import PropTypes from 'prop-types';

export default class ProfilePic extends Component
{
    static propTypes = {
        image: PropTypes.string
    };

    generateAvatar = ({image}) => {
        if(image === '') {
            return (
                <Avatar
                    rounded
                    medium
                    icon={{name: 'person', size: 34}}
                />
            )
        }
        else {
            return (
                <Avatar
                    rounded
                    medium
                    source={{uri: image}}
                />
            )
        }
    };

    render() {
        const {image} = this.props;

        return (
            <View>
                {this.generateAvatar({image})}
            </View>
        );
    }
}