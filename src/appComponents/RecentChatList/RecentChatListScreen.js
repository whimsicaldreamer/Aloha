import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { ThemeProvider, COLOR, Toolbar} from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500
    },
    toolbar: {
        container: {
            height: 56
        }
    }
};

export default class RecentChatListScreen extends Component
{
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View>
                    <Toolbar
                        leftElement="menu"
                        centerElement="Hola"
                        searchable={{
                            autoFocus: true,
                            placeholder: 'Search your chats',
                        }}
                        onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                    />
                    <Text>List of recent chats.</Text>
                    <Button onPress={() => this.props.navigation.navigate('Chat')} title="Go to Chat"/>
                </View>
            </ThemeProvider>
        );
    }
}