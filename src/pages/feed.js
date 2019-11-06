import React, { Component} from 'react';
import {View, Text} from 'react-native';

export default class Feed extends Component{
    static navigationOptions = {
        title: 'Feed',
    };

    render(){
        return(
            <View>
                <Text>Feed</Text>
            </View>
        );
    }
}