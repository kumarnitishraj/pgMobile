import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import GlobalState from './context/GlobalState';
import MainScreen from './navigations';

class App extends Component{
    render(){
        return(
            <GlobalState >
                <MainScreen />
            </GlobalState>
        )
    }
}

export default App;