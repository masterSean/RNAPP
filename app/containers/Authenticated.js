import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'

const Authenticated = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  }
})

export default Authenticated
