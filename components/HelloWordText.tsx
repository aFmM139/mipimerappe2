import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HelloWordText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>🧑‍💻🧑‍💻 Hola Mundo! 🧑‍💻🧑‍💻</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#705432',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 64,
    borderRadius: 15,
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
  },
  Text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
})

export default HelloWordText