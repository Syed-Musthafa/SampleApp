import React, {useState, useEffect, useCallback} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  ToastAndroid,
  Platform,
} from 'react-native';

import {COLORS, icons, images, SIZES} from './../../exports';

const Login = ({navigation}) => {
  //   const IndiaGate = './src/assets/images/india-gate.jpg';

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formValue;

  const handleSubmit = () => {

    if (email === 'welcome@gmail.com' && password === '1234') {
      navigation.navigate('Home');
    } else {
      console.warn('Email and Password Required');
    }

    // console.log(formValue);
  };

  const handleForgot = () => {
    navigation.navigate('Forgot');
  };

  const onInputChange = (name, value) => {
    setFormValue({...formValue, [name]: value});
  };

  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View style={{padding: 10}}>
          <Image
            source={images.coffeeLogo}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
        <Text style={styles.headerText}>
          Sign in to 
          <Text style={{fontSize: 27, color: COLORS.red}}> Coffee </Text>{' '}
        </Text>
      </View>
    );
  }

  function renderCard() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <View style={{padding: 10}}>
              <Text style={{fontSize: 15, color: COLORS.gray1}}>Email</Text>
            </View>
            <View style={{padding: 5}}>
              <View
                style={{
                  backgroundColor: '#ddd',
                  borderRadius: 10,
                  alignItems:'flex-start',
                  
                }}>
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChangeText={value => onInputChange('email', value)}
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={{padding: 5}}>
              <View style={{padding: 0, marginBottom: 10}}>
                <Text style={{fontSize: 15, color: COLORS.gray1}}>
                  Password
                </Text>
              </View>

              <View >
                <View
                  style={{
                    backgroundColor: '#ddd',
                    borderRadius: 10,
                    alignItems:'flex-start',
                  }}>
                  <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    value={password}
                    onChangeText={value => onInputChange('password', value)}
                    autoCapitalize="none"
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <TouchableOpacity onPress={handleForgot} style={{padding: 10}}>
              <Text style={{fontSize: 13, padding: 10, color: COLORS.gray1}}>
                Forget your password
              </Text>
            </TouchableOpacity>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLORS.secondary,
                  width: '80%',
                  height: 45,
                  borderRadius: 10,
                }}>
                <Text style={{color: COLORS.white}}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderBottom() {
    return (
      <View style={styles.bottomContainer}>
        <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
          copy rights
        </Text>
        <Image
          source={images.copyRight}
          resizeMode="contain"
          style={styles.copyright}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={{}}>
          <Text style={styles.lab}>kirti labs</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderCard()}
      {renderBottom()}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  cardContainer: {justifyContent: 'center', alignItems: 'center'},

  card: {
    height: 380,
    width: 320,

    borderRadius: 10,
    backgroundColor: '#F7F7F7',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.47,
    shadowRadius: 12,

    elevation: 2,
  },
  headerContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  logo : {
    width: 200,
     height: 180,
      borderRadius: 10
    },
    headerText : {
        fontSize: 30,
         color: COLORS.white
    },
  inputContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: SIZES.padding,
  },
  textInput: {
   color: '#333', 
   marginLeft:10
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: 10,
  },
  copyright: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  lab: {
    color: COLORS.lightGreen,
    fontWeight: 'bold',
  },
});
