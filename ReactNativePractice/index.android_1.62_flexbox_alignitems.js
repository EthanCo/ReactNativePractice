/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * Flexbox布局3
 * alignItems 表示元素在副轴上的对齐方向（针对单行）

 stretch (default) 默认，如果项目未设置高度或设为auto，将占满整个容器的高度。
 flex-start (flex_start) 副轴轴顶部对齐
 flex-end (flex_end) 副轴轴底部对齐
 center 副轴轴居中对齐
 baseline 项目的第一行文字的底部对齐
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
            <View style={styles.container}>
                <View style={styles.my_cell1}></View>
                <View style={styles.my_cell2}></View>
                <View style={styles.my_cell3}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column", //布局方向，相当于ori...，row=horizontal，column=ver...
            alignItems: "stretch",
        },
        my_cell1: {
            height: 100,
            backgroundColor: 'powderblue'
        }
        ,
        my_cell2: {
            width: 100,
            height: 100,
            backgroundColor: 'skyblue'
        }
        ,
        my_cell3: {
            width: 100,
            height: 100,
            backgroundColor: 'steelblue'
        }
    })
    ;

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
