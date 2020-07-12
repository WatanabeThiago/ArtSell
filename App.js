import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/pages/Home'
import LoginScreen from './src/pages/Login'
import FeedScreen from  './src/pages/Feed'
import RegisterScreen from  './src/pages/Register'
import PerfilScreen from  './src/pages/Perfil'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="FeedScreen" component={FeedScreen}options={{headerShown:false}}/>
        <Stack.Screen name="PerfilScreen" component={PerfilScreen}options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;