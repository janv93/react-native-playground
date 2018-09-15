/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import AppNavigator from "./AppNavigator";

type Props = {};
export default class App extends Component<Props> {

    onPress() {
        console.log(1);
    }

    onPress2() {
        console.log(2);
    }

    render() {
        return (
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <TouchableHighlight onPress={this.onPress} style={styles.v1}>
                        <View>
                            <Text style={styles.text}>Text 1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={this.onPress2} style={styles.v2}>
                        <View>
                            <Text style={styles.text}>Text 2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableNativeFeedback>
                        <View style={styles.v3}>
                            <Text style={styles.text}>Text 3</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <AppNavigator/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        justifyContent: 'center'
    },
    view2: {
        flexDirection: 'row',
        backgroundColor:'blue'
    },
    text: {
        color: 'black',
        alignSelf: 'center'
    },
    v1: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10
    },
    v2: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10
    },
    v3: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 10
    }
});
