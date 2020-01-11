import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Inicio extends Component{
    render(){
        return(
            <View>
                <View style={styles.view_titulo}>
                    <Text style={styles.titulo}>É um ótimo dia para</Text>
                    <Text style={styles.titulo}>um café</Text>
                </View>

                <View style={styles.menu_inicio}>
                    <TouchableOpacity style={styles.menu_inicio} onPress={() => this.props.navigation.navigate('Entrar')} >
                        <Icon size={25} color="#c4c4c4" name="user" />
                        <Text>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menu_inicio} onPress={() => this.props.navigation.navigate('Mensagens')}>
                        <Icon size={25} color="#c4c4c4" name="mail" style={{marginRight: 4}} />
                        <Text>Mensagens</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{height:'100%'}}>
                    <ImageBackground source={require('./../assets/plano_fundo_star.jpg')} style={{width:'100%', height:300}} >
                        <Text style={styles.titulo_rewards}>MY STARBUCKS REWARDS</Text>
                        <Text style={styles.text_rewards}>Comece a ganhar recompensas</Text>

                        <TouchableOpacity style={styles.botao_mais_info}>
                            <Text style={styles.texto_botao}>Mais Info</Text>
                        </TouchableOpacity>
                    </ImageBackground>                    
                </ScrollView>

                <View style={styles.view_faca_parte}>
                    <TouchableOpacity style={styles.botao_faca_parte}>
                        <Text style={styles.texto_botao}>Faça Parte</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view_titulo:{
        marginTop:50,
        marginBottom:20,
    },

    titulo:{
        fontSize:32,
        fontWeight:'600',
        marginLeft:15,
    },

    xicara_cafe:{
        width:45,
        height:45
    },

    menu_inicio:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:20
    },

    titulo_rewards:{
        fontSize:15,
        marginTop:50,
        marginLeft:10,
        fontWeight:'600',
        color:'#c0bfbe'
    },

    text_rewards:{
        fontSize:30,
        marginTop:20,
        marginLeft:10,
        fontWeight:'200',
        color:'#fff'
    },

    botao_mais_info:{
        backgroundColor:'#01a862',
        marginLeft:10,
        width:100,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        marginTop:30
    },

    texto_botao:{
        color:'#fff',
        fontWeight:'600',
        fontSize:18
    },

    view_faca_parte:{
        alignSelf:'flex-end',
        position:'absolute',
        top:600,
        flexDirection:'column',
    },

    botao_faca_parte:{
        backgroundColor:'#01a862',
        marginLeft:10,
        width:170,
        height:65,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginTop:30,
        marginLeft:15
    }
});