/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 * 网络 Fetch
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
    fetchText = (request_url)=> {
        fetch(request_url)
            .then((response)=>response.text())
            .then((responseText)=> {
                console.log(responseText)
                this.setState({result_text: responseText})
            })
            .catch((error)=> {
                console.error(error);
            });
    }

    fetchJson = (request_url)=> {
        fetch(request_url)
            .then((response)=>response.json())
            .then((responseJson)=> {
                console.log(responseJson)
                this.setState({result_text: responseJson.alarmCloudList[0].itemName})
            })
            .catch((error)=> {
                console.error(error);
            });
    }

    constructor(props) {
        super(props);
        this.state = {result_text: "loading..."};
    }

    render() {
        let value = this.state.result_text;
        this.fetchJson("http://cdn.sinacloud.net/leisurealarmclock/MainHandler.txt?KID=sina,2nq6ps3pIljbsxP2SfXV&Expires=1477731028&ssig=11ImJvyTQ%2B");
        return (
            <View>
                <Text>hello {value}</Text>
                <Image source={require("./img/ic_img_head.jpg")}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
