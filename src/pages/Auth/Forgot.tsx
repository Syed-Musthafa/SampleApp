import { StyleSheet, Text, View,Platform } from 'react-native'
import React, { useCallback } from 'react'
import { COLORS, SIZES } from '../../exports'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const Forgot = () => {


    const handleSubmit = useCallback(
      () => {
         console.warn("Successfully otp sent")
         navigation.navigate("Login")
      },
      [],
    )
    


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
                                    // value={email}
                                    // onChangeText={(value) => onInputChange("email" ,value)}
                                    autoCapitalize="none"

                                />
                            </View>
                        </View>

                        <View style={{ }}>
                            <View style={{ padding: SIZES.padding2 }}>
                                <Text style={{ fontSize: 15, color: COLORS.gray1 }}>Password</Text>
                            </View>

                           
                        </View>


                    </View>

                    <View>
                        <TouchableOpacity style={{ padding: SIZES.padding2 }}  >
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


  return (
    <View style={styles.container}>
      
            {renderCard()}
          
        </View>
  )
}

export default Forgot

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