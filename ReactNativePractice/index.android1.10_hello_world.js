/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 Hello world !

 styles:

 container
 占用比例(weight):1
 沿主轴对齐方向:居中
 副轴对齐方向:居中
 背景色:#F5FCFF

 welcome
 字体大小:20
 字体对齐方式:居中
 margin: 10

 instructions
 字体对齐方式:居中
 颜色:#333333
 marginButton:5
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ReactNativePractice extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello world !
                </Text>
                <Text style={styles.instructions}>
                    2016.10.27 20:23
                </Text>
                <Text style={styles.instructions}>
                    - EthanCo -
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //占用比例(weight):1
        flex: 1,
        //沿主轴对齐方向:居中
        justifyContent: 'center',
        //副轴对齐方向:居中
        alignItems: 'center',
        //背景色:#F5FCFF
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        //字体大小:20
        fontSize: 20,
        //字体对齐方式:居中
        textAlign: 'center',
        //margin:10
        margin: 10
    },
    instructions: {
        //字体对齐方式:居中
        textAlign: 'center',
        //颜色:#333333
        color: '#333333',
        //marginButton:5
        marginBottom: 5
    }
});

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
