import React, {Component} from 'react';
import {SafeAreaView, Text} from "react-native";
import IconLimpo from 'react-native-vector-icons/AntDesign';
import IconCheio from 'react-native-vector-icons/FontAwesome';


import { createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";


import Feed from './pages/feed';
import Perfil from './pages/perfil';
import Explorar from './pages/explorar';
import AddFoto from './pages/addFoto';
import Favoritos from './pages/favoritos';


export default class Routes extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1, backgroundColor: '#fafafa'}}>
                <AppTabNavigator />
            </SafeAreaView>
        );
    }
}


const FeedStack = createStackNavigator({
    Feed:{
        screen: Feed,
    },
    PerfilOutros: Perfil
});

const AppTabNavigator = createAppContainer(
    createMaterialTopTabNavigator(
        {
            Feed: {
                screen: FeedStack,
                navigationOptions:{
                    tabBarIcon: () => (
                        <IconLimpo name="home" size={25} color="#000" />
                    ),
                }
            },

            Explorar: {
                screen: Explorar,
                navigationOptions: {
                    tabBarIcon: () => (
                        <IconLimpo name="search1" size={25} color="#000"/>
                    )
                }
            },

            AddFoto: {
                screen: AddFoto,
                navigationOptions:{
                    tabBarIcon: () => (
                        <IconLimpo name="plussquareo" size={25} color="#000" />
                    )
                }
            },

            Favoritos: {
                screen: Favoritos,
                navigationOptions:{
                    tabBarIcon: () => (
                        <IconLimpo name="hearto" size={23} color="#000"/>
                    )
                }
            },

            Perfil: {
                screen: Perfil,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        //exemplo de foco no menu
                        if(focused){
                            return <IconCheio name="user" size={30} color="#000" />
                        }
                        return <IconCheio name="user-o" size={25} color="#000" />

                    }
                }
            },


        }, {
            tabBarPosition: 'bottom',
            initialRouteName: 'Feed',

            tabBarOptions:{
                showIcon: true,
                showLabel: false,
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#F8F8F8',
                style:{
                    backgroundColor: '#fafafa'
                },
                labelStyle:{
                    textAlign: 'center'
                },
                indicatorStyle:{
                    borderBottomColor: '#fafafa',
                    borderBottomWidth: 2,
                },

            }
        }
    )
);