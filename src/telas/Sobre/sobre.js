import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import instalogo from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/insta.png';
import { StyleSheet, ScrollView, View, Image } from 'react-native';


export default function Produtos(){
    return <>
        <ScrollView style={estilos.sobreback}>
        <Texto2 style={estilos.sobre}> Sobre </Texto2>

        <View style={estilos.insta} >
        <Texto style={estilos.instauser}>@_oftrance</Texto>
        <Image source={instalogo} style={estilos.instalogo} />
        </View>

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
        paddingTop: 20 },


        insta: {
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            margin: 30
        },
        instalogo: {
            width: 35,
            height: 35,
            marginRight: 5,
            marginTop: 5
        },
        instauser: {
            fontSize: 20,
            paddingTop: 8,
            fontWeight: 'bold',
        }
})