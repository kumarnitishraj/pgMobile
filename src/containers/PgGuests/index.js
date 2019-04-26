import React, { Component } from 'react'
import { StyleSheet, View, Image,Text,FlatList, Platform } from 'react-native'
import PropTypes from 'prop-types';
import Card from '../../components/PgGuest';
import { NavigationActions } from "react-navigation";
import ConsumerHOC from '../../context/ConsumerHOC'
import navigationOptions from '../../navigations/navigationOptions';

/**
 * Just a centered logout button.
 */
const nativationObject = {
  headerTitle: "PG Guest",
  create:'pg-guest'
}
class PgGuest extends Component {
  static propTypes = {
    logout: PropTypes.func
  }

  componentDidMount(){
    const { getPgGuestList, navigation } = this.props;
    console.log(navigation.state.params._id);
    getPgGuestList(navigation.state.params._id) 
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
    const { guestList } = this.props;
    return (
      <View style={styles.container}>
      
        <FlatList
          data={guestList}
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

export default ConsumerHOC(nativationObject)(PgGuest)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#d9d9d9'
  }
})
