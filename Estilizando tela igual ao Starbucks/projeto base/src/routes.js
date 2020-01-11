import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/AntDesign';


import Inicio from './pages/Inicio';
import Cards from './pages/Cards';
import Lojas from './pages/Lojas';
import Configuracoes from './pages/Configuracoes';


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
      marginTop:40
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
                            return <Icon size={25} color="#01a862" name="star" />
                        }
                        return <Icon size={25} color="#c4c4c4" name="star" />
                    }
                }
               
            },
            Cards:{
                screen:Cards,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon size={25} color="#01a862" name="creditcard" />
                        }
                        return <Icon size={25} color="#c4c4c4" name="creditcard" />
                    }
                }
            },
            Lojas:{
                screen:Lojas,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon size={25} color="#01a862" name="shoppingcart" />
                        }
                        return <Icon size={25} color="#c4c4c4" name="shoppingcart" />
                    }
                }
            },
            Configuracoes:{
                screen: Configuracoes,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon size={25} color="#01a862" name="setting" />
                        }
                        return <Icon size={25} color="#c4c4c4" name="setting" />
                    },
                    title: 'Config.',
                 
                }
            }
        },
        {
            tabBarPosition: 'bottom',
            initialRouteName: 'Inicio',
            
            tabBarOptions:{
                showIcon:true,
                showLabel: true,
                activeTintColor: '#01a862',
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