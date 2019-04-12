import React, { Component } from 'react'
import { StyleSheet, View, Image,Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import CustomButton from '../../components/CustomButton';
import IMAGES from '../../images';

/**
 * Just a centered logout button.
 */
class PgCard extends Component {
  static propTypes = {
    onPressCard: PropTypes.func.isRequired,
    onPressButton: PropTypes.func.isRequired,
    headingText: PropTypes.string.isRequired,
    addressText: PropTypes.string.isRequired
  }
  render () {
    const { onPressCard, onPressButton, headingText, addressText, index, data } = this.props;
    return (
      <TouchableOpacity
        onPress={onPressCard}
        key={`cardOne${index}`}
      >
        <View style={styles.card}>
          <View style={{flex:4}}>
            <Image
              style={styles.image}
              source={IMAGES.HOME}
            />
          </View>

          <View style={styles.detailView}>
            <View style={styles.headingView}>
              <Text style={styles.headingText}>{headingText}</Text>
              <CustomButton 
                buttonStyle={styles.btn}
                text={'Guiest'}
                onPress={onPressButton}
              />
            </View>
            <View style={styles.descriotionView}>
              <Text style={styles.descriotionText}>{addressText}</Text>
            </View>
          
            
            
          </View>
        </View>
    </TouchableOpacity>
    )
  }
}

PgCard.defaultProps = {
  onPressButton: () => null,
  onPressCard: () => null,
  headingText: 'Nandeshawara PG',
  addressText: '14904 Roxton Ave, Gardena, CA, 90249'
}

export default PgCard;

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
    flex:0.4, 
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
    marginLeft:10
  }
})
