import React, { Component } from 'react'
import { StyleSheet, View, Image,Text,FlatList, Platform } from 'react-native'
import PropTypes from 'prop-types';
import Card from '../../components/PgCard';
import SignupForm from '../PgRoom/AddRoomPg';
import { NavigationActions } from "react-navigation";
import navigationOpt from '../../navigations/navigationOptions';

/**
 * Just a centered logout button.
 */

export default class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    let option = {
        headerTitle: "Home",
        create:'pg-room'
    }
    return navigationOpt(navigation, option);
  }

  static propTypes = {
    logout: PropTypes.func
  }

  navigate = (screenName, params) =>{
    const navigateToScreen = NavigationActions.navigate({
      routeName: screenName,
      params
    });
    this.props.navigation.dispatch(navigateToScreen);
  }

  onPressCard = (data) =>{
    let params ={
      ...data,
      update:true
    }
    this.navigate('PgDetails',params)
  }

  onPressButton = (data) =>{
    let params ={
      ...data,
    }
    this.navigate('PgGuestList',params)
  }

  render () {
      console.log('workong oin osdfkjdshf', this.props)
    return (
      <View style={styles.container}>
      
        <FlatList
          data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'},{key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'}]}
          renderItem={({item, index}) => {
            return(
              <Card
                onPressCard = {()=>this.onPressCard(item)}
                onPressButton = {()=>this.onPressButton(item)}
                index={`card_${index}`}
                key={`card_${index}`}
                data = {item}
            />
            )
          }}
        />
        {/* <SignupForm /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#d9d9d9'
  }
})
