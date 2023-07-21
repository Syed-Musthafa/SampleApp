import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/Routes';
import { COLORS } from './src/exports';

const App = () => {
  return (
    <>
   <StatusBar translucent backgroundColor={COLORS.primary} />
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
  </>
  );
};

export default App;

