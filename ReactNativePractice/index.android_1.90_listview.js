/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * ListView
 * 与ScrollView不同，List并不立即渲染所有元素，而是优先渲染屏幕上可见的元素
 *
 * 必须的两个属性是dataSource(列表数据源)和renderRow(逐个解析数据源中的数据，返回组件)
 *
 * rawHasChange也是ListView的必要属性
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
    ScrollView,
    ListView
} from 'react-native';

export default class ReactNativePractice extends Component {
    // 构造
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows([
                "Item1", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7", "Item8", "Item9", "Item10"
            ])
        };
    }

    render() {
        return (
            <View style={{flex:1,paddingTop:22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=><Text style={{justifyContent: "center",height:100,fontSize:30,alignItems:"center"}}>{rowData}</Text>}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
