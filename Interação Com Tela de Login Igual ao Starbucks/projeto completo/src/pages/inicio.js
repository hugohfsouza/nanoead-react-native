import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity,ScrollView, Image  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {NavigationEvents} from 'react-navigation';
import {AsyncStorage} from 'react-native';

export default class Inicio extends Component{

    constructor (props) {
        super(props)
        this.state = {
            nome: ''
        }    
    }

    recuperarInformacaoUsuario = async () => {
        try {
            const value = await AsyncStorage.getItem('@usuario:key');
            if (value !== null) {
                this.setState({
                    nome: value
                });
            }
        } catch (error) {
            console.log(error)
        }
    };

    sair(){
        this.setState({
            nome: ''
        });
        AsyncStorage.setItem('@usuario:key', "");
    }

    opcaoLoginLogout(){
        if(this.state.nome != ""){
            return(
                <TouchableOpacity style={styles.menu_inicio} onPress={() => this.sair()}>
                    <Icon size={25} color="#c4c4c4" name="user" />
                    <Text>Sair</Text>
                </TouchableOpacity>
            );
        }else{
            return(
                <TouchableOpacity style={styles.menu_inicio} onPress={() => this.props.navigation.navigate('Entrar')}>
                    <Icon size={25} color="#c4c4c4" name="user" />
                    <Text>Entrar</Text>
                </TouchableOpacity>
            );
        }
    }


    render(){
   
        return(
            <View>
                <NavigationEvents onDidFocus={() => this.recuperarInformacaoUsuario()} />
                <View style={styles.view_titulo}>
                    <Text style={styles.titulo}>Ola {this.state.nome}</Text>                  
                </View>

                <View style={styles.menu_inicio}>
                    {this.opcaoLoginLogout()}

                    <TouchableOpacity style={styles.menu_inicio}>
                        <Icon size={25} color="#c4c4c4" name="mail" style={{marginRight:4}} />
                        <Text>Mensagem</Text>
                    </TouchableOpacity>
                </View>
                
        
                <ScrollView style={{height:'100%'}} >
                    <ImageBackground source={require('./../assets/plano_fundo_star.jpg')} style={{width: '100%', height: 300}}>
                        <Text style={styles.title_rewards}>MY STARBUCKS REWARDS</Text>
                        <Text style={styles.text_rewards}>Comece a ganhar recompensas</Text>
                        <TouchableOpacity style={styles.botao_mais_info}>
                            <Text style={styles.texto_botao}>Mais info</Text>
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
        marginTop: 50,
        marginBottom:20,
    },

    titulo: {
        fontSize: 32,
        
        fontWeight:'600',
        marginLeft:15,
    },

    icons:{

    },
    title_rewards:{
        fontSize: 15,
        marginTop: 50,
        marginLeft:10,
        fontWeight:'600',
        color:'#c0bfbe'
    },

    text_rewards:{
        fontSize: 30,
        marginTop: 20,
        marginLeft: 10,
        fontWeight:'200',
        color:'#ffffff'
    },

    botao_mais_info:{
        backgroundColor:'#01a862',
        marginLeft: 10,
        width: 100,
        height:40,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:30,
        marginTop: 30,
    },
    texto_botao:{
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 18
    },

    view_faca_parte: {
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 660,
        flexDirection: 'column',
    },

    botao_faca_parte:{
        backgroundColor:'#01a862',
        marginLeft: 10,
        width: 170,
        height:65,
        marginRight:15,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:50,
        marginTop: 30,
    },

    xicara_cafe:{
        width:45,
        height:45,
    },

    menu_inicio:{
        flexDirection: 'row',
        alignItems:'center',
        marginRight: 20,
    }
});