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
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                />
            }
            centerElement={{
                primaryText: item.key,
                secondaryText: "Secondary Text"
            }}
            rightElement={
                <RightComponent unreadCount={0} timeStamp={12121321}/>
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
                            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
                            renderItem={this._renderItem}
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