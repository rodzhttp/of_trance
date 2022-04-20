import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import { StyleSheet, ScrollView } from 'react-native';


export default function Produtos(){
    return <>
        <ScrollView style={estilos.sobreback}>
        <Texto style={estilos.sobre}> Sobre </Texto>
        </ScrollView>
    </>
}

const estilos = StyleSheet.create({
    sobreback: {
        backgroundColor: '#F0FFFF',},
    sobre: {
        color: '#8B008B',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 20 }

})