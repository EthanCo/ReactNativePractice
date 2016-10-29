/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * style (样式)
 * bigblue 蓝色color样式
 * red     红色color样式
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
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
