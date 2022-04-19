import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import { StyleSheet, Image } from 'react-native';
import img from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod1.png';

export default function Produtos(){
    return <>
        <Image source={img} style={estilos.img}/>
        <Texto style={estilos.preco1}>555</Texto>
    
    </>
}

const estilos = StyleSheet.create({
    img: {
        width: 100,
        height: 100
    },
    preco1: {

    }
})