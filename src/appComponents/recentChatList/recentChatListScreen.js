import React, { Component }  from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import {
    ThemeProvider,
    Toolbar,
    ListItem,
    Avatar
} from 'react-native-material-ui';
import {Button} from 'react-native-elements';
import CustomStatusBar from '../statusBar/statusBar';
import uiTheme from '../../themes/defaultTheme';
import styles from './styles';

export default class recentChatListScreen extends Component
{
    _renderItem = ({item}) => (
        <Text style={{fontSize: 18, paddingHorizontal: 20}}>{item.key}</Text>
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
                            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}]}
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