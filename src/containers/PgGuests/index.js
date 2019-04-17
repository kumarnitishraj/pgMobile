import React, { Component } from 'react'
import { StyleSheet, View, Image,Text,FlatList, Platform } from 'react-native'
import PropTypes from 'prop-types';
import Card from '../../components/PgGuest';
import { NavigationActions } from "react-navigation";
import navigationOpt from '../../navigations/navigationOptions';
/**
 * Just a centered logout button.
 */

export default class PgGuest extends Component {
  static propTypes = {
    logout: PropTypes.func
  }

  static navigationOptions = ({ navigation }) => {
    let option = {
        headerTitle: "PG Guest",
        create:'pg-guest'
    }
    return navigationOpt(navigation, option);
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
    this.navigate('GuestDetails',params)
  }

  render () {
    
    return (
      <View style={styles.container}>
      
        <FlatList
          data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'},{key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'}]}
          renderItem={({item, index}) => {
            return(
              <Card
                onPressCard={()=>this.onPressCard(item)}
                index={`card_${index}`}
                key={`card_${index}`}
                data = {item}
            />
            )
          }}
        />
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
