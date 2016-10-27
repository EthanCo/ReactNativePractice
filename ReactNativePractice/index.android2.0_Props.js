/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * Props (属性)
 *
 * 设置图片 uri 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
 * 设置高度 110
 * 设置宽度 200
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
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width:200,height:110}}></Image>
        );
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
