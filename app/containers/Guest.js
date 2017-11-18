import { StackNavigator } from 'react-navigation'
import Login from '../screens/Login' 

const Guest = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
});

export default Guest 
