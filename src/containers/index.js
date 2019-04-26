import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'
import AuthScreen from './AuthScreen'
import ConsumerHOC from '../context/ConsumerHOC'

/**
 * The root component of the application.
 * In this component I am handling the entire application state, but in a real app you should
 * probably use a state management library like Redux or MobX to handle the state (if your app gets bigger).
 */
class LoginAnimation extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
  }

  _simulateLogin = (email, password) => {
    const { login } = this.props;
    login({ email, password });
  }

  _simulateSignup = (email, password, name) => {
    const { register } = this.props;
    register({email, password, name});
  }

  navigate = (routeName) => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  componentDidMount() {
    const { auth } = this.props;
    if (!!auth['logedIn']) {
      this.navigate('HomeScreen');
    }
  }

  componentDidUpdate() {
    const { auth } = this.props;
    let self = this
    if (auth['logedIn']) {
      setTimeout(()=>{
        self.navigate('HomeScreen');
      },500)
      
    }
  }

  /**
   * Simple routing.
   * If the user is authenticated (isAppReady) show the HomeScreen, otherwise show the AuthScreen
   */
  render() {
    const { loading, auth } = this.props;
    return (
      <AuthScreen
        login={this._simulateLogin}
        signup={this._simulateSignup}
        isLoggedIn={auth['logedIn']}
        isLoading={loading['submitButtonLoading']}
      />

    )
  }
}

export default ConsumerHOC()(LoginAnimation);
