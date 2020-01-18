import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView, TextInput   } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {  Hoshi } from 'react-native-textinput-effects';

import {AsyncStorage} from 'react-native';

export default class Entrar extends Component{

    constructor (props) {
        super(props)
        this.state = {
            email: '', 
            senha: '',
            erroEmail:false,
            erroSenha:false,
        }
     }

     efetuarLogin = ()  => {

        this.setState({
            erroEmail: this.state.email == "" ? true : false,
            erroSenha: this.state.senha == "" ? true : false
        });

        if(this.state.erroEmail || this.state.erroSenha){
            return;
        }
        

        fetch('http://5e22e8deafee990014e596fd.mockapi.io/acesso', {
            method: 'POST',

            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            }),
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson.name);
            this.saveKey(responseJson.name);
            this.props.navigation.navigate('Inicio');
        });
    }

    async saveKey(value) {
        await AsyncStorage.setItem('@usuario:key', value);
    }
    
    erroEmail(){
        if(this.state.erroEmail == true){
            return(<Text style={styles.input_erro}>Por favor, preencha seu e-mail</Text>);
        }
        return(<Text></Text>);
    }

    erroSenha(){
        if(this.state.erroEmail == true){
            return(<Text style={styles.input_erro}>Por favor, preencha sua senha</Text>);
        }
        return(<Text></Text>);
    }

    render(){
        return(
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Icon size={25} style={{marginTop:30, marginLeft:14, color:'#000000'}} color="#c4c4c4" name="left" />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Entrar</Text>
                </View>

                <ScrollView style={{height:'100%'}}>
                    <Hoshi
                        style={styles.input}
                        label={'E-mail'}
                        borderColor={'#7ac1ba'}
                        autoCompleteType='email'
                        keyboardType='email-address'
                        onChangeText={(text) => { this.setState({email: text}) }}
                    />
                    {this.erroEmail()}
                    <Hoshi
                        style={styles.input}
                        label={'Senha'}
                        borderColor={'#7ac1ba'}
                        caretHidden={true}
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(text) => { this.setState({senha: text}) }}
                    />
                    {this.erroSenha()}
                </ScrollView>

                <View style={styles.view_faca_parte}>
                    <TouchableOpacity style={styles.botao_faca_parte} onPress={this.efetuarLogin}>
                        <Text style={styles.texto_botao}>Entrar</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#ffffff'
    },


    titulo: {
        fontSize: 32,
        marginTop: 10,
        marginBottom:20,
        fontWeight:'600',
        marginLeft:15,
    },

    
    input: {
        marginLeft:15,
        marginRight:15
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

    texto_botao:{
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 18
    },

    input_erro:{
        marginLeft: 15,
        color:'red',

    }

});