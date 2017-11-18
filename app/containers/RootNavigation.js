import { StackNavigator } from 'react-navigation'

import Guest from './Guest'
import Authenticated from './Authenticated'

const createRootNavigation = (signedIn = true) => {
  return StackNavigator(
    {
      Guest: {
        screen: Guest,
        navigationOptions: {
          gesturesEnabled: false
        },
      },
      Authenticated: {
        screen: Authenticated,
        navigationOptions: {
          gesturesEnabled: false
        },
      }
    }, 
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'Authenticated' : 'Guest'
    }
  )
}

export default createRootNavigation
