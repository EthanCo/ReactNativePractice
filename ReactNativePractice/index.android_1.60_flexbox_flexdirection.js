/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * Flexbox布局1
 * FlexDirection
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
        flexDirection: "row" //布局方向，相当于ori...，row=horizontal，column=ver...
    },
    my_cell1: {
        flex: 3,
        backgroundColor: 'powderblue'
    },
    my_cell2: {
        flex: 2,
        backgroundColor: 'skyblue'
    },
    my_cell3: {
        flex: 1,
        backgroundColor: 'steelblue'
    }
});

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
