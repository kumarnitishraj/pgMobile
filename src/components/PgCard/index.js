import React, { Component } from 'react'
import { StyleSheet, View, Image,Text } from 'react-native'
import PropTypes from 'prop-types';
import CustomButton from '../../components/CustomButton'

/**
 * Just a centered logout button.
 */
export default class HomeScreen extends Component {

  render () {
    return (
      
        <View style={styles.card}>
          <View style={{flex:4}}>
            <Image
              style={styles.image}
              source={require('../../images/logo.png') }
            />
          </View>

          <View style={styles.detailView}>
            <View style={styles.headingView}>
              <Text style={styles.headingText}>Namesdhfkjsdh kjfsdhf ksdjhf</Text>
              <CustomButton 
                buttonStyle={styles.btn}
                text={'Guiest'}
              />
            </View>
            <View style={styles.descriotionView}>
              <Text style={styles.descriotionText}>Descriotion skjdhfkjsdhfk  k kjsdfkdsfkh</Text>
            </View>
          
            
            
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  
  card:{
    padding:5,
    marginTop:10,
    backgroundColor:'#fff',
    width:'95%',
    flexDirection:'row',
    borderRadius:5,
    alignSelf:'center',
  },
  image:{
    width:100,
    height:100
  },
  detailView:{
    flex:9, 
    flexDirection:'column'
  },
  headingView:{
    flex:0.5, 
    flexDirection:'row', 
    alignItems:'center'
  },
  headingText:{
    fontSize:18,
    fontWeight:'600',
    margin:10, 
    flex:3
  },
  btn:{
    height:40, 
    width:70, 
    backgroundColor:'#1976D2'
  },
  descriotionView:{
    flex:1.5, 
    flexDirection:'row', 
    marginRight:5
  },
  descriotionText:{
    fontSize:15, 
    marginRight:2
  }
})
