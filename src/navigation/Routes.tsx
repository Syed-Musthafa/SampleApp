import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Main/Home';
import Login from '../pages/Auth/Login';
import Forgot from '../pages/Auth/Forgot';
import List from '../pages/Main/List';
import {DrawerContent} from './Drawer';
import Static from '../pages/Main/Static';

const HomeStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Login'}>
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Forgot" component={Forgot} />
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="List" component={List} />
      <HomeStack.Screen name="Static" component={Static} />
    </HomeStack.Navigator>
  );
};

const Routes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
};

export default Routes;

