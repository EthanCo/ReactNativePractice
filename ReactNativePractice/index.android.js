/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * Status (状态)
 *
 *
 * */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class Blink extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {showText: true};

        setInterval(()=> {
            this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        )
    }
}

export default class ReactNativePractice extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Blink text="i dfdfd"/>
                <Blink text="boldlfldfld"/>
            </View>
        )
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
