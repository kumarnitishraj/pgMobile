import React, { Component } from 'react'
import { KeyboardAvoidingView, LayoutAnimation, Platform, StyleSheet, UIManager } from 'react-native';
import { Image, View } from 'react-native-animatable';
import PropTypes from 'prop-types';

import IMAGES from '../../images'
import metrics from '../../config/metrics'
import AddPgGuestForm from '../../components/PgGuestForm';
import navigationOpt from '../../navigations/navigationOptions';

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true)


class AddRoomPg extends Component {
  static navigationOptions = ({ navigation }) => {
    let option = {
        headerTitle: "PG Guest",
        // create:'pg'
    }
    return navigationOpt(navigation, option);
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    isLoading: PropTypes.bool,
    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    onLoginAnimationCompleted: PropTypes.func.isRequired // Called at the end of a succesfull login/signup animation
  }
  componentWillUpdate (nextProps) {
    // If the user has logged/signed up succesfully start the hide animation
    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      this._hideAuthScreen()
    }
  }

  _hideAuthScreen = async () => {
    // 1. Slide out the form container
    await this._setVisibleForm(null)
    // 2. Fade out the logo
    await this.logoImgRef.fadeOut(800)
    // 3. Tell the container (app.js) that the animation has completed
    this.props.onLoginAnimationCompleted()
  }

  _setVisibleForm = async (visibleForm) => {
    // 1. Hide the current form (if any)
    if (this.state.visibleForm && this.formRef && this.formRef.hideForm) {
      await this.formRef.hideForm()
    }
    // 2. Configure a spring animation for the next step
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    // 3. Set the new visible form
    this.setState({ visibleForm })
  }

  render () {
    const { isLoggedIn, isLoading, signup, login } = this.props
  
    return (
      <View style={styles.container}>
        <Image
          animation={'bounceIn'}
          duration={2000}
          delay={200}
          ref={(ref) => this.logoImgRef = ref}
          style={styles.logoImg}
          source={IMAGES.HOME}
        />
       
        <KeyboardAvoidingView
          keyboardVerticalOffset={10}
          behavior={'padding'}
          style={[ styles.bottom]}
        >
          
            <AddPgGuestForm
              ref={(ref) => this.formRef = ref}
              onLoginLinkPress={() => this._setVisibleForm('LOGIN')}
              onSignupPress={signup}
              isLoading={isLoading}
            />
          
        </KeyboardAvoidingView>
      </View>
    )
  }
}

AddRoomPg.defaultProps ={
  isLoggedIn: false,
  isLoading: false,
  signup: ()=>null,
  login: ()=>null,
  onLoginAnimationCompleted: ()=>null
}

export default AddRoomPg;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
    paddingTop: 24,
    backgroundColor: 'white'
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 30
  },
  bottom: {
    backgroundColor: '#1976D2'
  }
})
