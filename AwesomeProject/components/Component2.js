import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Button
} from 'react-native';
import {AppRegistry} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';

export default class Component2 extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            test: "test"
        }
    }

    renderRow(data) {
        return (<View style={styles.row}><Text style={styles.txt}>{data}</Text></View>);
    }

    changeRoute() {
        this.props.navigation.navigate('Component1');
    }

    openMenu() {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
            <View>
                <View style={styles.wrapper}>
                <Header style={styles.header}>
                    <Left>
                        <Icon name="menu" onPress={this.openMenu.bind(this)}/>
                    </Left>
                </Header>
                </View>
                    <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
                <Button title="button" onPress={this.changeRoute.bind(this)}/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
        marginBottom: '1%',
        padding: '1%'
    },
    header: {
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    wrapper:{
        elevation:3
    }
});

AppRegistry.registerComponent('Component2', () => Component2);
