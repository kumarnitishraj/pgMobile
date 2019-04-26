import React, { Component } from 'react';
import Context from './index';
import navigationOpt from '../navigations/navigationOptions';


const ConsumerHOC = (navitionObject) => (WrapComponent) =>  {

    return class ConsumerComponent extends Component {

        static navigationOptions = ({ navigation }) =>  navigationOpt(navigation, navitionObject);
         
        render() {
            return (
                <Context.Consumer>
                    {
                        context => (<WrapComponent {...context} {...this.props}/>)
                    }
                </Context.Consumer>
            )
        }
    };
};


export default ConsumerHOC;