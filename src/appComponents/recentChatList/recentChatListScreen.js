import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import { ThemeProvider, COLOR, Toolbar } from 'react-native-material-ui';
import uiTheme from '../../themes/defaultTheme';

class recentChatListScreen extends Component
{
    render() {
        /*const { primaryColor } = this.context.uiTheme.palette;*/
        console.log(this.context);
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View>
                    <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                    <View style={{ backgroundColor: COLOR.green500, height: StatusBar.currentHeight}} />
                    <View>
                        <Toolbar
                            leftElement="menu"
                            centerElement="Aloha"
                            searchable={{
                                autoFocus: true,
                                placeholder: 'Search your chats',
                            }}
                            onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                        />
                        <Text>List of recent chats.</Text>
                        <Button onPress={() => this.props.navigation.navigate('Chat')} title="Go to Chat"/>
                    </View>
                </View>
            </ThemeProvider>
        );
    }
}

recentChatListScreen.contextTypes = {
    uiTheme: PropTypes.object
};

export default recentChatListScreen;