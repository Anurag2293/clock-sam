import React, { useState } from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View, StyleSheet, Image} from "react-native";
import Alarm from './screens/Alarm';
import Timer from './screens/Timer';
import Stopwatch from './screens/Stopwatch';


const Stack = createNativeStackNavigator();

const App = () => {
  
  return (

    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Alarm'
      screenOptions={{headerShown : false}}>
      
        <Stack.Screen name="Alarm" 
        component={Alarm} />

        <Stack.Screen name="Timer" 
        component={Timer}  />

        <Stack.Screen name="Stopwatch" 
        component={Stopwatch} /> 

      </Stack.Navigator>
    </NavigationContainer>
    
    //<Timer />
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
  
});

export default App;
