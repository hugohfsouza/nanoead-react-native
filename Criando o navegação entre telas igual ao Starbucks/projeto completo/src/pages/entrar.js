import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView, TextInput   } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



export default class Entrar extends Component{

    render(){
        return(
            <View>
                <View style={styles.sombra}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Icon size={25} style={{marginTop:30, marginLeft:14, color:'#000000'}} color="#c4c4c4" name="left" />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Entrar</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    sombra:{
        backgroundColor:'#ffffff'
    },


    titulo: {
        fontSize: 32,
        marginTop: 10,
        marginBottom:20,
        fontWeight:'600',
        marginLeft:15,
    },

});