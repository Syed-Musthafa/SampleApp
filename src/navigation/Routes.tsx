/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Main/Home';
import Login from '../pages/Auth/Login';
import Forgot from '../pages/Auth/Forgot';

const HomeStack = createNativeStackNavigator();


const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Login"}
      >
          <HomeStack.Screen name="Login" component={Login} />
          <HomeStack.Screen name="Forgot" component={Forgot} />
           <HomeStack.Screen name="Home" component={Home} />
    
      </HomeStack.Navigator>
    )
   

}

const Routes = () => {
  return (
    <View style={{ flex:1}}>
      <HomeStackScreen />
    </View>
  )
}

export default Routes

const styles = StyleSheet.create({})