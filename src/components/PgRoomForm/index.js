import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'

import CustomButton from '../CustomButton'
import CustomTextInput from '../CustomTextInput'
import metrics from '../../config/metrics'


export default class PgForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onSignupPress: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    this.state = {
      pgName: '',
      address:''
    }
  }

  

  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ])
    }
  }

  render () {
    const { email, password, fullName } = this.state
    const { isLoading, onSignupPress, data } = this.props;
    console.log('Data : ',data)
    return (
      <View style={styles.container}>
        <View style={styles.form} ref={(ref) => this.formRef = ref} animation={'bounceIn'} duration={600} delay={400}>
          <CustomTextInput
            ref={(ref) => this.formName = ref}
            placeholder={'Pg name'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={true}
            withRef={true}
            onSubmitEditing={() => this.formAddress.focus()}
            onChangeText={(value) => this.setState({ fullName: value })}
            isEnabled={!isLoading}
          />
          
          <CustomTextInput
            ref={(ref) => this.formAddress = ref}
            placeholder={'Address'}
            editable={!isLoading}
            returnKeyType={'done'}
            secureTextEntry={false}
            withRef={true}
            onChangeText={(value) => this.setState({ address: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={styles.footer}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
            <CustomButton
              onPress={() => onSignupPress(email, password, fullName)}
              // isEnabled={isValid}
              isLoading={isLoading}
              buttonStyle={styles.createAccountButton}
              textStyle={styles.createAccountButtonText}
              text={'Add Guest'}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1
  },
  form: {
    marginTop: 20
  },
  footer: {
    height: 100,
    justifyContent: 'center'
  },
  createAccountButton: {
    backgroundColor: 'white'
  },
  createAccountButtonText: {
    color: '#3E464D',
    fontWeight: 'bold'
  },
  loginLink: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
  }
})
