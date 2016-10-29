/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * ScrollView
 *
 * */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView
} from 'react-native';

export default class ReactNativePractice extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:40}}>Start</Text>
                <Image source={require("./img/ic_img_head.jpg")}/>
                <Image source={require("./img/ic_img_head.jpg")}/>
                <Image source={require("./img/ic_img_head.jpg")}/>
                <Image source={require("./img/ic_img_head.jpg")}/>
                <Image source={require("./img/ic_img_head.jpg")}/>
                <Image source={require("./img/ic_img_head.jpg")}/>
                <Image source={require("./img/ic_img_head.jpg")}/>
                <Image source={require("./img/ic_img_head.jpg")}/>
                <Image source={require("./img/ic_img_head.jpg")}/>
                <Image source={require("./img/ic_img_head.jpg")}/>
                <Text style={{fontSize:40}}>End</Text>
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
