
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './src/Home';
import Setting from './src/Setting';
import Profile from './src/Profile'
import Start from './src/Start';

const Tab = createMaterialBottomTabNavigator();

function MyTabs({route}) {
  const {name}=route.params

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} initialParams={{name}}/>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
