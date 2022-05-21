import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import instalogo from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/insta.png';
import emaillogo from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/email.png';
import { StyleSheet, ScrollView, View, Image, Linking } from 'react-native';


export default function Produtos(){
    return <>
        <ScrollView style={estilos.sobreback} >
        <Texto2 style={estilos.sobre}> Sobre </Texto2>

        <View style={estilos.pack} >
        <Texto style={estilos.user}>@oftrance_</Texto>
        <Image source={instalogo} style={estilos.instalogo} />
        </View>

        <View style={estilos.pack} >
        <Texto style={estilos.user}>oftrance@gmail.com</Texto>
        <Image source={emaillogo} style={estilos.emaillogo} />
        </View>

        </ScrollView>

        
    </>
}

const estilos = StyleSheet.create({
    sobreback: {
        backgroundColor: '#F0FFFF',
    },
    sobre: {
        color: '#8B008B',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 20 
    },
    pack: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        margin: 5,
        paddingTop: 10,
    },

    
    email: {
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
    emaillogo: {
        width: 55,
        height: 35,
    },
    user: {
        fontSize: 20,
        paddingTop: 8,
        fontWeight: 'bold',
    },
})