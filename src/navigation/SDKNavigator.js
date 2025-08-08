// src/navigation/SDKNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../components/WelcomeScreen';
import FormScreen from '../components/FormScreen';
import ResultScreen from '../components/ResultScreen';

const Stack = createStackNavigator();

const SDKNavigator = ({ callbacks, initialData, theme }) => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme?.primaryColor || '#6200EE',
        },
        headerTintColor: theme?.headerTextColor || '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen}
        options={{ title: 'Welcome' }}
        initialParams={{ 
          callbacks,
          initialData,
          theme
        }}
      />
      <Stack.Screen 
        name="Form" 
        component={FormScreen}
        options={{ title: 'Information Form' }}
        initialParams={{ 
          callbacks,
          theme
        }}
      />
      <Stack.Screen 
        name="Result" 
        component={ResultScreen}
        options={{ 
          title: 'Complete',
          headerLeft: null, // Disable back button
          gestureEnabled: false, // Disable swipe back
        }}
        initialParams={{ 
          callbacks,
          theme
        }}
      />
    </Stack.Navigator>
  );
};

export default SDKNavigator;