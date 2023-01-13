import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screen/HomeScreen';
import SettingScreen from './screen/TabScreen/SettingScreen';
import Chatting1 from './screen/TabScreen/Chatting/Chatting1';
import Chatting2 from './screen/TabScreen/Chatting/Chatting2';
import Chatting3 from './screen/TabScreen/Chatting/Chatting3';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name='Chatting1' component={Chatting1}/>
        <Stack.Screen name='Chatting2' component={Chatting2}/>
        <Stack.Screen name='Chatting3' component={Chatting3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

