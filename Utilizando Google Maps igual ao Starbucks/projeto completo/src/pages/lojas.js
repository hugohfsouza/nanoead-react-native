import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class Lojas extends Component{

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            lojasDisponiveis: []
        };

        this.recuperarLojas = this.recuperarLojas.bind(this);
        this.recuperarLojas();
    }

    async recuperarLojas(){
        return await fetch('http://www.mocky.io/v2/5e1a19bb3100004e0084b5c9')
        .then((response) => response.json())
        .then((responseJson) => {
            
            this.setState({
                lojasDisponiveis: responseJson
            });
        });
    }

    plotarMap(){

        navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            });
        });

        if(this.state.latitude == null){
            
            return (<Text>Ops. Você precisa habilitar a sua localização</Text>);
        }
        return(
            <MapView
                    style={{width:'100%', height:500}}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta:  0.00922*1.5,
                        longitudeDelta: 0.00421*1.5,
                    }}>

                <Marker
                    coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                    }}
                    centerOffset={{ x: -18, y: -60 }}
                    anchor={{ x: 0.69, y: 1 }}
                    accessibilityActions
                />


                {
                    this.state.lojasDisponiveis.map(function(loja){
                        return (<Marker
                            coordinate={{
                                latitude: loja.latitude,
                                longitude: loja.longitude,
                            }}
                            centerOffset={{ x: -18, y: -60 }}
                            anchor={{ x: 0.69, y: 1 }}
                            accessibilityActions
                        />)
                    })
                }
                
            </MapView>
        );
    }

    render(){
        return(
            <View>
                 <View>
                    <Text style={styles.titulo}>Lojas</Text>
                </View>
                {this.plotarMap()}
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 32,
        marginTop: 50,
        marginBottom:20,
        fontWeight:'600',
        marginLeft:15,
    },

    
});