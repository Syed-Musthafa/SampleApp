import {StyleSheet, Text, View, Platform} from 'react-native';
import React, {useCallback} from 'react';
import {COLORS, SIZES} from '../../exports';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const Forgot = ({navigation}) => {
    
  const handleSubmit = useCallback(() => {
    console.warn('Successfully otp sent');
    navigation.navigate('Login');
  }, [navigation]);

  function renderCard() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <View style={{ marginBottom: 10}}>
            <Text style={{fontSize: 25, color: COLORS.lightGreen}}>Forgot Password</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <View style={{padding: SIZES.padding2}}>
              <Text style={{fontSize: 15, color: COLORS.gray1}}>Email</Text>
            </View>
            <View style={{padding: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#ddd',
                  borderRadius: 10,
                }}>
                <TextInput
                  style={[styles.textInput, {color: '#333'}]}
                  // value={email}
                  // onChangeText={(value) => onInputChange("email" ,value)}
                  autoCapitalize="none"
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.secondary,
              margin:30,
              height: 45,
              borderRadius: 10,
            }}>
            <Text style={{color: COLORS.white}} onPress={handleSubmit}>
                Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return <View style={styles.container}>{renderCard()}</View>;
};

export default Forgot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  card: {
    justifyContent: 'center',

    height: 300,
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
  inputContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: SIZES.padding,
  },
  textInput: {
    width: '90%',
    height: 40,
    marginTop: Platform.OS === 'ios' ? 0 : 12,
    padding: SIZES.padding,

    marginTop: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,
    marginLeft: 10,
  },
});
