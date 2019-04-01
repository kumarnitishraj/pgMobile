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
              source={require('../../images/user.png') }
            />
          </View>

          <View style={styles.detailView}>
            <View style={styles.headingView}>
              <Text style={styles.headingText}>Nitish Kumar</Text>
            </View>
            <View style={styles.descriotionView}>
              <Text style={styles.descriotionTypeText}>Adhar : </Text>
              <Text style={styles.descriotionText}>lshdfh</Text>
            </View>
            <View style={styles.descriotionView}>
              <Text style={styles.descriotionTypeText}>PAN : </Text>
              <Text style={styles.descriotionText}>lshdfh</Text>
            </View>
            <View style={[styles.descriotionView,{flex:1.5,alignItems:'flex-start'}]}>
              <Text style={styles.descriotionTypeText}>Address : </Text>
              <Text style={styles.descriotionText}>lshdfh</Text>
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
    flex:1, 
    flexDirection:'row', 
    justifyContent:'center',
  },
  headingText:{
    fontSize:18,
    fontWeight:'600',
    margin:0, 
    flex:3
  },
  btn:{
    height:40, 
    width:70, 
    backgroundColor:'#1976D2'
  },
  descriotionView:{
    flex:1, 
    flexDirection:'row', 
    marginRight:5,
    marginTop:1,
    alignItems:'center'
  },
  descriotionText:{
    fontSize:15
  },
  descriotionTypeText:{
    fontSize:17, 
    fontWeight:'600'
  }
})
