import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity,ScrollView, Image  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Inicio extends Component{

    constructor (props) {
        super(props)
        this.state = {
            produtos: []
        }    
    }

    componentDidMount(){
        fetch('http://www.mocky.io/v2/5e2c27db3100005900267e7f')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                produtos: responseJson,
            })
        })
        .catch((error) => {
        console.error(error);
        })
    }

    renderProdutos(){
        console.log(this.state.produtos);
        return(
            this.state.produtos.map(function(produto){
                return(
                    <TouchableOpacity>
                        <View style={styles.card}>
                            <Icon name="hearto" size={25} style={{alignSelf:'flex-end'}} />
                            <Image source={{url: produto.image}} style={{width:160, height:160}}/>
                            <Text>{produto.nome}</Text>
                            <Text style={styles.frete}>{produto.frete}</Text>

                            <Text style={styles.preco}>R${produto.preco}</Text>
                        </View>

                    </TouchableOpacity>
                );
            })
        );
    }

    retornaTipoFrete(valor){
        if(valor == 'gratis'){
            return (<Text>Frete Gratis</Text>)
        }
    }

    render(){
        return(
            <View>       
                <ScrollView style={{height:'100%'}}>
                    <ScrollView style={{height:'100%'}} horizontal={true} >
                        {this.renderProdutos()}
                    </ScrollView>


                    <ScrollView style={{height:'100%'}} horizontal={true} >
                        {this.renderProdutos()}
                    </ScrollView>


                    <ScrollView style={{height:'100%'}} horizontal={true} >
                        {this.renderProdutos()}
                    </ScrollView>
                </ScrollView> 
            </View>
        );
    }
}


const styles = StyleSheet.create({
    card:{
        marginTop: 50,
        marginBottom:20,
        paddingLeft:10,
        width:180,
    },

    titulo: {
        fontSize: 32,
        fontWeight:'600',
        marginLeft:15,
    },

    frete:{
        color:"green",
        fontSize: 12,
    },

    preco:{
        marginTop:20,
        fontWeight: 'bold'
    }

});