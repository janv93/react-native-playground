import { createStackNavigator } from 'react-navigation';
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

const AppNavigator = createStackNavigator({
    Component1: { screen: Component1 },
    Component2: { screen: Component2 },
});

export default AppNavigator;