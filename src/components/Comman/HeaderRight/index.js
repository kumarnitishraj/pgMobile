import React from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import PropsType  from 'prop-types';
import IMAGES from '../../../images'
import Touchable from '../../TouchableView';
import { NavigationActions } from "react-navigation";

class Header extends React.Component {   

    navigate = (screenName, params) =>{
        const navigateToScreen = NavigationActions.navigate({
          routeName: screenName,
          params
        });
        this.props.navigation.dispatch(navigateToScreen);
    }

    onPress = ()=>{
        const { create } = this.props;
        switch(create){
            case 'pg-room':
                this.navigate('PgDetails',{});
                break;

            case 'pg-guest':
                this.navigate('GuestDetails',{});
                break;

            default:
                this.navigate('PgDetails',{});
                break;
        }
    }

    render() {
        return (
            <Touchable style={styles.container} onPress={this.onPress}>
            <Image
                source={IMAGES.PLUS}
                style={styles.icon}
            />
            </Touchable>
        );
    }
};

export default Header;
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:50,
        height:40,
        alignSelf:'center',
        alignItems:'center', 
        justifyContent:'center'
    },
    icon:{
        height:25,
        width:25
    }
})