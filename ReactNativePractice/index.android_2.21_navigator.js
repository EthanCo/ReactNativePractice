/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * 使用导航器跳转页面
 *
 * */

import React, { Component } from 'react';
import {AppRegistry,Navigator} from 'react-native';

import MyScene from "./MyScene";

export default class ReactNativePractice extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{title:"NavigatorTest",index:0}}
                renderScene={(route,navigator)=>{
                    return <MyScene title={route.title}/>
                }}
            />
        );
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
