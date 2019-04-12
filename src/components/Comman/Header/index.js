import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform
} from 'react-native';
import PropsType  from 'prop-types';


class Header extends React.Component {   
 
        render() {
            
            const { title } = this.props;
            return (
              <View style={Platform.OS==='android'?styles.androidContainer:styles.container}>
                <Text style={styles.headerTitleStyle}>{title}</Text>
              </View>
            );
          }
};

Header.propsType={
    title: PropsType.string.isRequired
}

Header.defaultProps={
    title:'Home'
}

export default Header;
const styles = StyleSheet.create({
    headerTitleStyle: {
        flexWrap:'wrap',
        color:'#FFF',
        fontSize:16,
        lineHeight:20,
        letterSpacing:0.4,
        fontWeight:'600',
        
    },
    container:{
        flex:1,
        alignSelf:'center',
        alignItems:'center' 
        
    },
    androidContainer:{
        flex:1,
    }
})