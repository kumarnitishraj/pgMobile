import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../containers/HomeScreen';
import PgDetails from '../containers/PgRoom/AddRoomPg';
import GuestList from '../containers/PgGuests';
import GuestDetails from '../containers/PgGuests/AddRoomPg';
import Home from '../containers';

const AppNavigator = createStackNavigator({
        Home: {
            screen: Home
        },
        HomeScreen: {
            screen: HomeScreen
        },
        PgDetails: {
            screen: PgDetails
        },
        AddPg: {
            screen: PgDetails
        },
        AddGuest: {
            screen: GuestDetails
        },
        GuestDetails: {
            screen: GuestDetails
        },
        PgGuestList: {
            screen: GuestList
        }

    },
    {
        index: 0,
        initialRouteName: 'Home',
        navigationOptions: {
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed',
            backgroundColor:'#0071e9',
            headerStyle: {
                backgroundColor: 'red',
                paddingBottom: 1,
                shadowRadius: 0,
                width:400,
                shadowOffset: {
                    height: 0,
                },
                borderBottomWidth: 0,
            }
        }
    }
    // {
    //     headerMode: 'none',
    //     navigationOptions: {
    //       headerVisible: false,
    //       gesturesEnabled: false,
    //     }
    // }
);

export default createAppContainer(AppNavigator);