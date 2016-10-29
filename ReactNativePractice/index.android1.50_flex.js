/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * 高度与宽度
 * 固定高度 width，height
 * 弹性（Flex）宽高
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

export default class ReactNativePractice extends Component {
    render() {
        return (
            <View>
                <View style={{width:200,height:200,backgroundColor:"blue"}}></View>
                <View style={{flex:1,height:100,backgroundColor:"red"}}></View>
                <View style={{flex:1,height:50,backgroundColor:"yellow"}}></View>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
