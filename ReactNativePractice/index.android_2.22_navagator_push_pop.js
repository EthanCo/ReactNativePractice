/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * 使用导航器跳转页面 push、pop
 *
 * */

import React, { Component } from 'react';
import {AppRegistry,Navigator} from 'react-native';

import MyScene2 from "./MyScene2";

export default class ReactNativePractice extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{title:"NavigatorTest Push、Pop",index:0}}
                renderScene={(route,navigator)=>
                    <MyScene2 title={route.title}
                            onForward={()=>{
                                const nextIndex = route.index+1;
                                navigator.push({
                                    title:"Scene"+nextIndex,
                                    index:nextIndex
                                });
                            }}

                            onBack={()=>{
                                if(route.index>0){
                                    navigator.pop();
                                }
                            }}
                    />
                }
            />
        );
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
