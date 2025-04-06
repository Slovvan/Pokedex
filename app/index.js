import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App from './App';
import Recovery from './pages/recovery';
import Editing from './pages/editing';
import Register from './pages/register';
import List from './pages/list';
import Unique from './pages/unique';

const Stack = createStackNavigator();

const MainApp = () => (
  <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Recovery" component={Recovery} />
      <Stack.Screen name="Editing" component={Editing} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Unique" component={Unique} />
    </Stack.Navigator>
  </NavigationContainer>
);

registerRootComponent(MainApp);
