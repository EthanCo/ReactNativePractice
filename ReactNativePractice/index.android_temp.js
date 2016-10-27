/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class ReactNativePractice extends Component {

    constructor(props) {
        super(props);

        //一.
        var person = new Object();
        person['name'] = 'ethanco';
        person['age'] = 21;

        var name = person['name']; //ethanco
        var age = person['age']; //21

        var person2 = {'name': 'ethanco', 'age': 21};
        var name2 = person2.name;
        var age2 = person2.age;

        var person3 = {name, 'ethanco', age: 21};

        //二.
        var str = new String("one");
        //有许多操作字符串的方法可供你调用
        str.toLocaleLowerCase();
        //验证是不是对象
        var isObj = typeof str;

        //三.
        var arr = {'one', 'two', 'three'};
        //JavaScript会把上面的代码转化为下面这样
        var arr2 = {'0': 'one', '1': 'two', '2': 'three'}

        //不能这样访问 -> 只有属性字符串符合javaScript的标识符规范是，才可以
        //var s = arr.0;
        var s = arr['0'];
        //可省去引号 -> JavaScript会自动将括号中的两侧加上单引号
        var s1 = arr[0];

        //声明方式
        function foo1(a, b) {
            return a + b;
        }

        //表达式方式
        var foo2 = function (a, b) {
            return a + b;
        }

        var b = {country: 'China'};
        var a = {__proto__: b};

        var country = a.country;

        var b = {propB: 'propB'}
        var a = Object.create(b);

        //六.
        var obj = {
            add: function (a, b) {
                return a + b;
            }
        }

        var obj2 = {
            add: function add(a, b) {
                return a + b;
            }
        }

        var a = "foo";
        b = 42;
        c = {};
        var o = {
            a: a,
            b: b,
            c: c
        };

        var o = {a, b, c}

        var i = 0;
        var a = {}


        //函数的特殊调用方式 : new调用
        function add(a, b) {
            var result = a - b;
            return result;
        }

        var sum1 = add(5, 3); //sum的值为14

        //不再返回函数体内的return语句中的值，而是返回了一个对象!
        var sum2 = new add(5, 3); //typeof obj == object

        function Person(name, age, sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }

        var m = new Person("m", 31, "男");

        var person = new Person("m", 32, "男");


    }

    render() {
        return (
            <View>
                <Text>
                    Welcome to React Native!
                </Text>
            </View>
        );
    }
}

//声明方式创建class
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
