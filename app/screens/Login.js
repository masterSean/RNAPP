import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, Button } from 'react-native'

const Login = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Email</Text>
        <TextInput />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput />
      </View>
      <Button title="Login" onPress={() => navigation.navigate('Protected') }/>
    </View>
  )
}

export default Login
