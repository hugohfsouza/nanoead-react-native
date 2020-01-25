    import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView  } from 'react-native';

export default class Cards extends Component{

    render(){
        return(
            <View>
                <View style={styles.sombra}>
                        <Text style={styles.titulo}>Starbucsks Cards</Text>
                </View>

                <ScrollView style={{height:'100%', backgroundColor: '#f7f7f7'}} >
                    <Image source={require('./../assets/cards.jpg')} style={styles.imagem_cartao} />

                    <Text style={styles.texto_explicativo}> Adicione um Starbucks Card Digital assim que.</Text>
                    <Text style={styles.texto_explicativo}> registrar-se ou adicione um Starbucks Card Ativado.</Text>


                </ScrollView>

                <View style={styles.view_faca_parte}>
                    <TouchableOpacity style={styles.botao_faca_parte}>
                        <Text style={styles.texto_botao}>Adiquirir Cartão</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    sombra:{

    },


    titulo: {
        fontSize: 32,
        marginTop: 50,
        marginBottom:20,
        fontWeight:'600',
        marginLeft:15,
    },

    imagem_cartao: {
        width: 400, 
        height: 300
    },

    texto_explicativo:{
        textAlign:'left',
        marginLeft: 15,
        marginRight: 15,
        fontSize: 16,
        marginTop: 3,
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

    
});