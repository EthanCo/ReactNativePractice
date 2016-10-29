/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * Status (状态)
 * 每隔一秒Text消失、显示
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
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(()=> {
            this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class ReactNativePractice extends Component {
    render() {
        return (
            <View style={{flex: 1,justifyContent: "center",alignItems:"center"}}>
                <Blink text="i love to blink"/>
                <Blink text="Yes blinking is so great"/>
            </View>
        )
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
