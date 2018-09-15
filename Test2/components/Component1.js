import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Switch,
    Button
} from 'react-native';
import {AppRegistry} from 'react-native';

type
Props = {};
export default class Component1 extends Component<Props> {

    static navigationOptions = {
        header: null
    }

    constructor(){
        super();

        this.state={
            text:"test",
            switch:false
        }

    }

    onSubmit(event){
        console.log(event.nativeEvent.text);        // Wert des inputs
    }

    changeRoute(){
        this.props.navigation.navigate('Component2');
    }

    render() {
        return (
            <View style={styles.v}>
                <TextInput value={this.state.text}
                           onChangeText={(val)=>{ this.setState({text:val}) }}
                           onSubmitEditing={ this.onSubmit }
                />
                <Text style={styles.t1}>
                    {this.state.text}
                </Text>
                <Switch value={this.state.switch}
                        onValueChange={ (val)=>{ this.setState({switch:val}) } } />
                <Button title="button" onPress={ this.changeRoute.bind(this) }/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    t1: {

    },
    v:{

    }
});

AppRegistry.registerComponent('Component1', () => Component1);