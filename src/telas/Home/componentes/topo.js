import React from "react";
import { StyleSheet, Image, Dimensions } from 'react-native';
import topo from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/topo2.png';

//constante pra receber o tamanho da imagem 
const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 520;
const valor = altura / largura * width;

export default function Topo() {
    return <>
        <Image source={topo} style={estilos.topo} />
        
    </>;
}

const estilos = StyleSheet.create({
    topo: { //imagem do topo
        width: '100%',
        height: valor
    },
})