import React, { Component }  from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { ThemeProvider, Toolbar } from 'react-native-material-ui';
import CustomStatusBar from '../statusBar/statusBar'
import uiTheme from '../../themes/defaultTheme';

export default class recentChatListScreen extends Component
{
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View>
                    <CustomStatusBar themeColor={uiTheme.palette.primaryColor} />
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
                        <Button
                            onPress={() => this.props.navigation.navigate('Chat', {userName: 'Brent'})}
                            title="Go to Brent's Chat"
                        />
                    </View>
                </View>
            </ThemeProvider>
        );
    }
}