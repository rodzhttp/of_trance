import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto'
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import img from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod1.png';
import img2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod2.png';


export default function Prod2(){
    return <>
    <View style={estilos.line1}>
    <TouchableOpacity>
        <Image source={img} style={estilos.img}/>
        <Texto style={estilos.prod}>PRODUTO</Texto>
    </TouchableOpacity>
    <TouchableOpacity>
        <Image source={img2} style={estilos.img}/>
        <Texto style={estilos.prod}>PRODUTO2</Texto>
    </TouchableOpacity>
    <TouchableOpacity>
        <Image source={img2} style={estilos.img}/>
        <Texto style={estilos.prod}>PRODUTO2</Texto>
    </TouchableOpacity> 
    </View>
    </>
}


const estilos = StyleSheet.create({
    line1: {
        flexDirection: "row",
    },
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