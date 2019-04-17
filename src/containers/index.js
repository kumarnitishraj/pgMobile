import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'
import AuthScreen from './AuthScreen'
import HomeScreen from './HomeScreen'

/**
 * The root component of the application.
 * In this component I am handling the entire application state, but in a real app you should
 * probably use a state management library like Redux or MobX to handle the state (if your app gets bigger).
 */
class LoginAnimation extends Component {
  static navigationOptions = {
    header: null,
  };
  
  state = {
    isLoggedIn: false, // Is the user authenticated?
    isLoading: false, // Is the user loggingIn/signinUp?
    isAppReady: true // Has the app completed the login animation?
  }

  // /**
  //  * Two login function that waits 1000 ms and then authenticates the user succesfully.
  //  * In your real app they should be replaced with an API call to you backend.
  //  */
  _simulateLogin = (username, password) => {
    this.setState({ isLoading: true })
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
  }

  _simulateSignup = (username, password, fullName) => {
    console.log(username, fullName,  password)
    this.setState({ isLoading: true })
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
  }

  navigate = (routeName) => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  componentDidMount(){
    if(this.state.isAppReady){
      this.navigate('HomeScreen');
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState){
  //   const { isAppReady } = prevState;
  //   if(isAppReady){
  //     this.navigate('HomeScreen');
  //   }
  //   return null;
  // }

  componentDidUpdate(){
    const { isAppReady } = this.state;
    if(isAppReady){
      this.navigate('HomeScreen');
    }
  }

  /**
   * Simple routing.
   * If the user is authenticated (isAppReady) show the HomeScreen, otherwise show the AuthScreen
   */
  render () {
      return (
        <AuthScreen
          login={this._simulateLogin}
          signup={this._simulateSignup}
          isLoggedIn={this.state.isLoggedIn}
          isLoading={this.state.isLoading}
          onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
        />
      )
    }
}

export default LoginAnimation;
