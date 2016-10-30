/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * 动画 Animated
 *
 * */

import React, { Component } from 'react';
import {AppRegistry,Animated} from 'react-native';

export default class ReactNativePractice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }

    render() {

        return (
            // 可选的基本组件类型: Image, Text, View
            <Animated.Image
                source={require("./img/ic_img_head.jpg")}
                style={{
          width: 200,
          height:200,
          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
          ]
        }}
            />
        );
    }

    /**
     * React 生命周期
     * componentWillMount 组件出现前 就是dom还没有渲染到html文档里面
     * componentDidMount 组件渲染完成 已经出现在dom文档里
     */

    componentDidMount() {
        console.log("componentDidMount...>>>");
        this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
        Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
            this.state.bounceValue,                 // 将`bounceValue`值动画化
            {
                toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // 开始执行动画
    }


}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
