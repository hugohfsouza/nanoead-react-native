import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Mensagens extends Component{
    render(){
        return(
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>                 
                        <Icon size={25} color="#c4c4c4" name="left" style={{marginTop:30, marginLeft:15, color:'#000'}} />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Mensagens</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    header:{
        backgroundColor:'#fff'
    },

    titulo:{
        fontSize:32,
        marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        marginLeft:15
    },
});