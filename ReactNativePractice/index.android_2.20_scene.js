/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * 使用导航器跳转页面 Scene
 *
 * */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import MyScene from "./MyScene";

export default class ReactNativePractice extends Component {
    render() {
        return (
            <MyScene title="EthanCo"/>
        );
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
