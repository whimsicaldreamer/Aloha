import React, { Component }  from 'react';
import {
    View,
    FlatList,
    Alert,
    Animated
} from 'react-native';
import {
    ThemeProvider,
    Toolbar,
    ListItem,
} from 'react-native-material-ui';
import { Button } from 'react-native-elements';
import CustomStatusBar from '../statusBar/statusBar';
import ProfilePic from './profilePicture';
import CenterComponent from './centerElement';
import uiTheme from '../../themes/defaultTheme';
import styles from './styles';

export default class recentChatListScreen extends Component
{
    state = {
        scrollY: new Animated.Value(0)
    };

    _renderItem = ({item}) => (
        <ListItem
            divider={true}
            numberOfLines={2}
            onPress={() => Alert.alert('Single Tap')}
            onLongPress={() => Alert.alert('Long Tap')}
            leftElement={
                <ProfilePic image={item.avatar} theme={uiTheme}/>
            }
            centerElement={
                <CenterComponent
                    primaryText={item.chatWith}
                    secondaryText={item.lastMessage}
                    timestamp={item.lastMessageTime}
                    unreadCount={item.unreadMessages}
                    theme={uiTheme}
                />
            }
        />
    );

    render() {
        //ToDo Change in elevation on scroll gives warnings in debug mode and needs to be fixed
        const elevate = this.state.scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 7],
            extrapolate: 'clamp'
        });

        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={styles.contentWrapper}>
                    <CustomStatusBar themeColor={uiTheme.palette.primaryColor} elevation={elevate}/>
                    <View>
                        <Toolbar
                            leftElement="menu"
                            centerElement="Aloha"
                            searchable={{
                                autoFocus: true,
                                placeholder: 'Search your chats',
                            }}
                            onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                            style={{container: {elevation: elevate}}}
                        />
                    </View>
                    <View style={styles.chatListContainer}>
                        <FlatList
                            data={[
                                {
                                    userId: 1,
                                    messageId: 'a',
                                    avatar: '',
                                    chatWith: 'Jane Doe',
                                    lastMessage: 'This line here will show the last message and takes up the whole line',
                                    lastMessageTime: 1509693517,
                                    unreadMessages: 0
                                },
                                {
                                    userId: 2,
                                    messageId: 'b',
                                    avatar: 'https://pbs.twimg.com/profile_images/718588760003383296/2AG8omMO_400x400.jpg',
                                    chatWith: 'John Doe',
                                    lastMessage: 'This line here will show the last loooooong message',
                                    lastMessageTime: 1509520707,
                                    unreadMessages: 100
                                },
                                {
                                    userId: 3,
                                    messageId: 'c',
                                    avatar: 'https://pbs.twimg.com/profile_images/907811115459125248/i8AzK6gR_400x400.jpg',
                                    chatWith: 'John Doe',
                                    lastMessage: 'This line here will show the last message',
                                    lastMessageTime: 1510134380,
                                    unreadMessages: 1
                                },
                                {
                                    userId: 4,
                                    messageId: 'c',
                                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                                    chatWith: 'John Doe',
                                    lastMessage: 'This line here will show the last message to show it extends and forms ellipsis',
                                    lastMessageTime: 1510246390,
                                    unreadMessages: 0
                                },
                                {
                                    userId: 5,
                                    messageId: 'd',
                                    avatar: '',
                                    chatWith: 'John Doe',
                                    lastMessage: 'This line here will show the last message',
                                    lastMessageTime: 1510134380,
                                    unreadMessages: 55
                                },
                                {
                                    userId: 6,
                                    messageId: 'e',
                                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                                    chatWith: 'John Doe',
                                    lastMessage: 'This line here will show the last message',
                                    lastMessageTime: 1510134380,
                                    unreadMessages: 1
                                },
                                {
                                    userId: 7,
                                    messageId: 'f',
                                    avatar: '',
                                    chatWith: 'John Doe',
                                    lastMessage: 'This line here will show the last message',
                                    lastMessageTime: 1510134380,
                                    unreadMessages: 0
                                },
                                {
                                    userId: 8,
                                    messageId: 'g',
                                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                    chatWith: 'John Doe',
                                    lastMessage: 'This line here will show the last message',
                                    lastMessageTime: 1510134380,
                                    unreadMessages: 1
                                },
                                {
                                    userId: 9,
                                    messageId: 'h',
                                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                    chatWith: 'John Doe',
                                    lastMessage: 'This line here will show the last message',
                                    lastMessageTime: 1510134380,
                                    unreadMessages: 1
                                }
                            ]}
                            renderItem={this._renderItem}
                            keyExtractor={item => item.userId}
                            onScroll={Animated.event(
                                [{nativeEvent: {
                                    contentOffset: {y: this.state.scrollY}
                                }}]
                            )}
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