/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * TextInput 文本输入
 * onChangeText属性    此属性接受一个函数，此函数会在文本变化时被调用。
 * onSubmitEditing属性 会在文本被提交后（用户按下软键盘上的提交键）调用
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
} from 'react-native';

export default class ReactNativePractice extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
