import React from 'react';
import {createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

exports.StackNavigator = createStackNavigator({
    Component1: {screen: Component1},
    Component2: {screen: Component2},
});

exports.TabNavigator = createBottomTabNavigator({
    Component1: {
        screen: Component1, navigationOptions: {
            tabBarLabel: 'Komponente 1',
            tabBarIcon: ({tintColor}) => (<Icon name="md-home" size={20}/>)
        }
    },
    Component2: {
        screen: Component2, navigationOptions: {
            tabBarLabel: 'Komponente 2',
            tabBarIcon: ({tintColor}) => (<Icon name="md-list" size={20}/>)
        }
    },
});

exports.DrawerNavigator = createDrawerNavigator({
        Component1: {screen: Component1},
        Component2: {screen: Component2},
    }
);
