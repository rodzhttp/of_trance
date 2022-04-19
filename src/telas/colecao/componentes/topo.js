import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import { StyleSheet, Image, Dimensions } from 'react-native';
import topo from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/topo2.png';

//constante pra receber o tamanho da imagem 
const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 720;
const valor = altura / largura * width;

export default function Topo({ titulo }) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{ titulo }</Texto>
        
    </>;
}

const estilos = StyleSheet.create({
    topo: { //imagem do topo
        width: '100%',
        height: valor

    },
    titulo: { //titulo "ravestore"
        color: '#4B0082',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 60,
        textAlign: 'center',
        paddingTop: 18

    },
})