import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

import Header from '../components/Comman/Header'
import HeaderRight from '../components/Comman/HeaderRight';

export default NavigatorOpt = (navigation, option = {}) => {
    
    return {
        headerTitle: <Header {...option} />,
        // headerLeft: (props) => <WMLeftButton navigation={navigation} {...option} {...props} />,
        headerStyle: styles.headerStyle,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitleStyle,
        headerRight:!!option['create']?<HeaderRight {...option} navigation={navigation}/>:null,
    }

};

const styles = StyleSheet.create({
    arrowLayout: {
        color: '#fff',
        height: 40,
        width: 40,
        paddingTop: 10,
        paddingRight: 2,
        marginLeft: 10,
        fontSize: 20,
        alignSelf: 'flex-end'
    },
    headerStyle: {
        backgroundColor: '#0071e9',
        shadowColor: '#000',
        elevation: 0,
        borderBottomWidth: 0,
    },
    headerStyleBack: {
        backgroundColor: '#0071e9',
        borderBottomWidth: 0,
    },
    headerTitleStyle: {
        fontWeight: 'normal',
        width: 200,
    },
})