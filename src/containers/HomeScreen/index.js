import React, { Component } from 'react'
import { StyleSheet, View, Image,Text,FlatList, Platform } from 'react-native'
import PropTypes from 'prop-types';
import Card from '../../components/PgGuest';
import SignupForm from '../PgRoom/AddRoomPgForm';
/**
 * Just a centered logout button.
 */

export default class HomeScreen extends Component {
  static propTypes = {
    logout: PropTypes.func
  }

  render () {
    return (
      <View style={styles.container}>
      
        {/* <FlatList
          data={[{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'}]}
          renderItem={() => <Card/>}
        /> */}
        <SignupForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Platform.OS === 'ios'?30:0,
    backgroundColor:'#1976D2'
  }
})
