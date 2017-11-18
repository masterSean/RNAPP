import React from 'react'
import { View, Text } from 'react-native'
import createRootNavigation from './containers/RootNavigation'

class App extends React.Component {
  render() {
    const Layout = createRootNavigation(false)
    return <Layout />
  }
}

export default App
