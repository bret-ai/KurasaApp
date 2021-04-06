import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BookDetail } from './screens';
import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#1E1B26"
        translucent={true}
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Home'}
      >
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />
        {/* Screens */}
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
