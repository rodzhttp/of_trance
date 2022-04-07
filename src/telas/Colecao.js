import React from 'react';
import { StyleSheet, Text, Image, Dimensions } from 'react-native';
import topo from '../../assets/topo.png';

const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 720;
const valor = altura / largura * width;

export default function Colecao(){
    return <> 
    <Image source={topo} style={estilos.topo} />
    <Text>Confecção a mão ॐ totalmente singular</Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: valor,
    },

});
