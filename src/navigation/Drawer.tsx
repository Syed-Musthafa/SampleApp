import React from 'react';
import {Text, View, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {SIZES, COLORS, icons} from '../exports';

export function DrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, backgroundColor: COLORS.primary}}>
      <View>
        <View
          style={{
            flex: 1,
            padding: SIZES.padding2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>Menu</Text>
        </View>
        <DrawerItem
          icon={({color, size}) => (
            <View style={{marginTop: 23}}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{width: 30, height: 30, tintColor: COLORS.lightGray3}}
              />
            </View>
          )}
          label="List"
          labelStyle={{marginLeft: -16, marginTop: 20, color: COLORS.white}}
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <View style={{}}>
              <Image
                source={icons.shop}
                resizeMode="contain"
                style={{width: 30, height: 30, tintColor: COLORS.lightGray3}}
              />
            </View>
          )}
          label="Static"
          labelStyle={{marginLeft: -16, color: COLORS.white}}
          onPress={() => {
            props.navigation.navigate('Static');
          }}
        />
      </View>
    
    </DrawerContentScrollView>
  );
}
