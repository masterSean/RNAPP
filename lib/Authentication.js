import OAuthManager from 'react-native-oauth'

const manager = new OAuthManager('gitapp')

manager.configure({
  github: {
    client_id: '029a457c69f18b598bc4',
    client_secret: '465059e0fd1716ae597f486263f7a8ac1a5c2df7'
  }
})

export default manager
