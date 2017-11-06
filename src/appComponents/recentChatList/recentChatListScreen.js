import React, { Component }  from 'react';
import {
    View,
    FlatList,
    Alert
} from 'react-native';
import {
    ThemeProvider,
    Toolbar,
    ListItem,
} from 'react-native-material-ui';
import {
    Button,
    Avatar
} from 'react-native-elements';
import CustomStatusBar from '../statusBar/statusBar';
import RightComponent from './rightElement';
import uiTheme from '../../themes/defaultTheme';
import styles from './styles';

export default class recentChatListScreen extends Component
{
    _renderItem = ({item}) => (
        <ListItem
            divider={true}
            onPress={() => Alert.alert('Single Tap')}
            onLongPress={() => Alert.alert('Long Tap')}
            leftElement={
                <Avatar
                    rounded
                    medium
                    source={{uri: item.avatar}}
                />
            }
            centerElement={{
                primaryText: item.chatWith,
                secondaryText: item.lastMessage
            }}
            rightElement={
                <RightComponent unreadCount={item.unreadMessages} timeStamp={item.lastMessageTime}/>
            }
        />
    );

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={styles.contentWrapper}>
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
                    </View>
                    <View style={styles.chatListContainer}>
                        <FlatList
                            data={[
                                {
                                    userId: 1,
                                    messageId: 'a',
                                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                    chatWith: 'Jane Doe',
                                    lastMessage: 'This line here will show the last message',
                                    lastMessageTime: 1509693517,
                                    unreadMessages: 0
                                },
                                {
                                    userId: 2,
                                    messageId: 'b',
                                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                    chatWith: 'John Doe',
                                    lastMessage: 'This line here will show the last message',
                                    lastMessageTime: 1509520707,
                                    unreadMessages: 100
                                },
                                {
                                    userId: 3,
                                    messageId: 'c',
                                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                    chatWith: 'John Doe',
                                    lastMessage: 'This line here will show the last message',
                                    lastMessageTime: 1509957750,
                                    unreadMessages: 0
                                }
                            ]}
                            renderItem={this._renderItem}
                            keyExtractor={item => item.userId}
                        />
                        <Button
                            icon={{name:"chat", size: 26}}
                            title="START CHAT"
                            raised
                            borderRadius={50}
                            containerViewStyle={uiTheme.button.container}
                            buttonStyle={uiTheme.button.buttonStyle}
                            fontWeight="500"
                        />
                    </View>
                </View>
            </ThemeProvider>
        );
    }
}