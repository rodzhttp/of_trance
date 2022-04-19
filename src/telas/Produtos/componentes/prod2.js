import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import img from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod1.png';


export default function Prod2(){
    return <>
    <TouchableOpacity>
        <Image source={img} style={estilos.img}/>
        <Texto style={estilos.prod}>PRODUTO</Texto>
    </TouchableOpacity>
    </>
}


const estilos = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        marginTop: 40,
        marginBottom: 10,
        borderRadius: '10px',
    },
    prod: {
        fontSize: 15,
        fontWeight: 'bold'}
})