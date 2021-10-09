import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";
import GameSettings from "./components/GameSettings";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Home} />
        <Stack.Screen name="GameSettings" component={GameSettings} options={{ title: 'Game difficulty' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
