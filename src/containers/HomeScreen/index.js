import React, { Component } from 'react'
import { StyleSheet, View, Image,Text,FlatList, Platform } from 'react-native'
import PropTypes from 'prop-types';
import Card from '../../components/PgCard';
import SignupForm from '../PgRoom/AddRoomPg';
import { NavigationActions } from "react-navigation";
import navigationOpt from '../../navigations/navigationOptions';
import ConsumerHOC from '../../context/ConsumerHOC'
import Spinner from 'react-native-loading-spinner-overlay';

/**
 * Just a centered logout button.
 */
const navitionObject = {
        headerTitle: "Home",
        create:'pg-room'
    }
class HomeScreen extends Component {

  componentDidMount(){
    this.props.getPgList()
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
    const { loading, pgList } = this.props;
    return (
      <View style={styles.container}>
        <Spinner
          visible={loading.apiLoading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <FlatList
          data={pgList}
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

export default ConsumerHOC(navitionObject)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#d9d9d9'
  },
  spinnerTextStyle: {
    color: '#FFF'
  }
})
