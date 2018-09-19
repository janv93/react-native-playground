import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from "./AppNavigator";
import {Header, Left, Right, Icon} from 'native-base';

export default class App extends Component {

    render() {
        return (
            <View style={styles.view1}>
                <DrawerNavigator/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    view1: {
        flex: 1
    }
});
