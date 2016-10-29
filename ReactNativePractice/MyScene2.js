/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * 使用导航器跳转页面 PUsh、pop
 *
 * */

import React, { Component,
    PropTypes, //注意 <<<<<<<<<<<<<< 添加这个
} from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

//export default 导出当前组件，以允许其他组件引用和使用当前组件
export default class MyScene2 extends Component {
    static propTypes = {
        this: PropTypes.string.isPrototypeOf,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    };

    render() {
        return (
            <View>
                <Text>Hi:My name is {this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>点我进入下一场景</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>点我进入上一场景</Text>
                </TouchableHighlight>
            </View>
        )
    }
}