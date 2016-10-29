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
import {
    Text,
    View,
} from 'react-native';

//export default 导出当前组件，以允许其他组件引用和使用当前组件
export default class MyScene extends Component {
    static defaultProps = {
        this: "MyScene"
    };

    render() {
        return (
            <View>
                <Text>Hi:My name is {this.props.title}</Text>
            </View>
        )
    }
}