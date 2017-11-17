import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Navigation
