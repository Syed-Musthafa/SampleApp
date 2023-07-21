import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Static = () => {
  return (
    <View style={styles.container}>
      <Text>Coming Soon</Text>
    </View>
  )
}

export default Static

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})