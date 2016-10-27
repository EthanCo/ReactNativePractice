/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * 自定义Props (属性)
 * 定义一个自定义组件 Greeting
 * 增加一个自定义Props : name
 *
 * 在ReactNativePractice中进行调用
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

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        )
    }
}

export default class ReactNativePractice extends Component {
    render() {
        return (
            <View style={{alignItems:"center"}}>
                <Greeting name="EthanCo"/>
                <Greeting name="Zhk"/>
                <Greeting name="MYY"/>
            </View>
        )
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
