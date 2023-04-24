import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertsScreen } from '../screens/AlertsScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefresh } from '../screens/PullToRefresh';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
      <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
      <Stack.Screen name="SwitchScreen" component={ SwitchScreen } />
      <Stack.Screen name="AlertsScreen" component={ AlertsScreen } />
      <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
      <Stack.Screen name="PullToRefresh" component={ PullToRefresh } />
    </Stack.Navigator>
  );
}
