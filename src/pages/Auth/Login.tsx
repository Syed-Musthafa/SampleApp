import React, {useState, useEffect, useCallback} from 'react'
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
} from 'react-native'


import { COLORS, icons, images, SIZES } from './../../exports'




const Login = ({ navigation }) => {

//   const IndiaGate = './src/assets/images/india-gate.jpg';

    const [formValue, setFormValue] = useState({
        email : "",
        password : ""
    });

    const { email, password } = formValue;

    const handleSubmit = () => {

        navigation.navigate('Home')

        // if (email=== "welcome@gmail.com" && password === "1234") {
        //     navigation.navigate('Home')
        // } else {
        //    console.warn("Give mention email and password")
        // }
      
        console.log(formValue);
       
       
    };

    const handleForgot = () => {
        navigation.navigate('Forgot');
    }



    const onInputChange = (name,value) => {
        setFormValue({...formValue, [name] : value});
    };

    function renderHeader() {
        return (
            <View style={{ marginTop:50, justifyContent: 'center', alignItems: 'center', padding: SIZES.padding }} >
              <View style={{ padding:10 }}>
                <Image
                  source={require('../../assets/images/tour_logo.png')}
                  style={{ width: 200, height: 150, borderRadius:10 }}
                  resizeMode="stretch"
                />
              </View>
              
                <Text style={{ fontSize: 30, color: COLORS.white, }}> Sign in to <Text style={{ fontSize: 27, color: COLORS.red, }}>Coffee </Text> </Text>
                
               

            </View>
        )
    }


    function renderCard() {
        return (

            <View style={{ justifyContent: 'center', alignItems: 'center', }}>

                <View style={styles.card}>


                    <View style={styles.inputContainer}>
                        <View style={{ padding: SIZES.padding2 }}>
                            <Text style={{ fontSize: 15, color: COLORS.gray1 }}>Email</Text>
                        </View>
                        <View style={{ padding:10}}>
                            <View style={{ flexDirection: 'row', backgroundColor: "#ddd", borderRadius: 10, }}>

                                <TextInput

                                    style={[styles.textInput, { color: '#333', }]}
                                    value={email}
                                    onChangeText={(value) => onInputChange("email" ,value)}
                                    autoCapitalize="none"

                                />
                            </View>
                        </View>

                        <View style={{ }}>
                            <View style={{ padding: SIZES.padding2 }}>
                                <Text style={{ fontSize: 15, color: COLORS.gray1 }}>Password</Text>
                            </View>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', backgroundColor: "#ddd", borderRadius: 10, }}>

                                    <TextInput

                                        secureTextEntry={true}
                                        style={[styles.textInput, { color: '#333', }]}
                                        value={password}
                                        onChangeText={(value) => onInputChange("password",value)}

                                        autoCapitalize="none"

                                    />
                                </View>
                            </View>
                        </View>


                    </View>

                    <View>
                        <TouchableOpacity
                        onPress={handleForgot}
                        style={{ padding: SIZES.padding2 }}  >
                            <Text style={{ fontSize: 13, padding: 10, color: COLORS.gray1 }}>Forget your password</Text>
                        </TouchableOpacity>


                        <View style={{ justifyContent: "center", alignItems: 'center', }}>
                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={{ justifyContent: "center", alignItems: 'center', backgroundColor: COLORS.secondary, width: "80%", height: 45, borderRadius: 10 }}>
                                <Text style={{ color: COLORS.white }}>{ false ? "Loading...." :  "Sign In "}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>


        )
    }


    function renderBottom() {
        return (
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', width: '100%',  marginBottom:10  }}>
                <Text style={{ color: COLORS.white, fontWeight: 'bold' , }}>
                   copy rights @
                </Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("SignUp") }}
                    style={{}} >
                    <Text style={{ color: COLORS.gold, fontWeight: 'bold' }} > kirti labs</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderCard()}
            {renderBottom()}
        </View>
    )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },

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

    }
})