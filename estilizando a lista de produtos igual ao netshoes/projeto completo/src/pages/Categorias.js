import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class Cards extends Component{

    constructor(props){
        super(props);

        this.state = {
            categorias:[
                {"id":1, "nome":'Feminino', 'image':""},
                {"id":2, "nome":'Roupas', 'image':""},
            ]
        }
    }

    render(){
        return(
            <View>
                <View style={styles.barraSuperior}>
                    <Text style={styles.textoBarraSuperior}>Categorias</Text>
                </View>

                <ScrollView style={{height:'100%', backgroundColor: '#f1f1f6', paddingVertical:15,}} >
                    
                    {this.state.categorias.map(function(item){
                        return(
                            <TouchableOpacity key={item.id}>
                                <View style={styles.item}>
                                    <Image source={require('./../assets/categoria_1.png')} style={styles.imagem_cartao} />
                                    <Text style={styles.texto_categoria}>{item.nome}</Text>
                                </View>
                            </TouchableOpacity>

                        );
                    })}

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    barraSuperior:{
        alignItems:'center',
        backgroundColor:'#5a2d82',
    },

    textoBarraSuperior:{
        color:'#fff',
        paddingTop:50,
        paddingBottom: 10,
        fontWeight: '400',
        fontSize: 18

    },

    item:{
        marginHorizontal: 15,
        backgroundColor:'#fff',
        flexDirection: 'row',
        borderRadius:10,
        paddingTop:10,
        marginBottom:10,
        alignItems:'center',
    },

    imagem_cartao: {
        width: 80, 
        height: 95,
        marginLeft:10,
    },

    texto_categoria:{
        color:'#000',
        fontWeight:'bold',
        fontSize:18,
        marginLeft:10,
    }
});