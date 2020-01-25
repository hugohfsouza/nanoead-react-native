import React, {Component} from 'react';
import {SafeAreaView, Text, Image, View, StyleSheet} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/AntDesign';


import Inicio from './pages/Inicio';


import Categorias from './pages/Categorias';

export default class Routes extends Component{
    render(){
        return(
            <View style={styles.container}>
                <AppTabNavigator></AppTabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginBottom:10,
    },
});
  

const AppTabNavigator = createAppContainer(
    createMaterialTopTabNavigator(
        {
            Inicio: {
                screen:Inicio,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon size={25} color="#5a2d82" name="home" />
                        }
                        return <Icon size={25} color="#c4c4c4" name="home" />
                    }
                }
               
            },
            Categorias:{
                screen:Categorias,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon size={25} color="#5a2d82" name="bars" />
                        }
                        return <Icon size={25} color="#c4c4c4" name="bars" />
                    }
                }
            },
        },
        {
            tabBarPosition: 'bottom',
            initialRouteName: 'Inicio',
            
            tabBarOptions:{
                showIcon:true,
                showLabel: true,
                activeTintColor: '#5a2d82',
                inactiveTintColor: '#c4c4c4',
                style:{
                    backgroundColor:'#ffffff',
                    borderTopWidth:1,
                    shadowRadius: 8,
                    shadowOpacity: 8,
                    shadowColor: '#000000'
                },
                upperCaseLabel: false,  
                indicatorStyle:{
                    backgroundColor:'#ffffff'
                }
            },
            
        }
    )
);