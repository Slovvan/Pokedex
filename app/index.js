import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App from './App';
import Recovery from './pages/recovery';
import Editing from './pages/editing';
import Register from './pages/register';
import List from './pages/list';
import Unique from './pages/unique';
import { navigationRef } from './navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './pages/favorites';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={List} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Editing} />
    </Tab.Navigator>
  );
}

const MainApp = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName='App' screenOptions={{headerShown: false}}>
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="Recovery" component={Recovery} />
      <Stack.Screen name="Editing" component={Editing} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Unique" component={Unique} />
    </Stack.Navigator>
  </NavigationContainer>
);

registerRootComponent(MainApp);
