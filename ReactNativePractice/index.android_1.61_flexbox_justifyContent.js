/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * Flexbox布局2
 * justifyContent 决定其子元素沿着主轴的排列方式
 * flex-start (flex_start) (default) 默认左对齐
 * flex-end (flex_end) 右对齐
 * center (center) 居中对齐
 * space-between (space_between) 两端对齐，模块间隔等距
 * space-around (space_around) 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
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
        justifyContent: "flex-end"
    },
    my_cell1: {
        width: 100,
        height: 100,
        backgroundColor: 'powderblue'
    },
    my_cell2: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
    },
    my_cell3: {
        width: 100,
        height: 100,
        backgroundColor: 'steelblue'
    }
});

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
