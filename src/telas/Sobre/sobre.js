import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import instalogo from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/insta.png';
import emaillogo from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/email.png';
import feedback from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/feedback.png';
import { StyleSheet, ScrollView, View, Image, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 480;
const valor = altura / largura * width;

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

        <Texto style={estilos.desc1}></Texto>
        <Texto style={estilos.desc2}>- Roupas a pronta entrega e encomendas</Texto>
        <Texto style={estilos.desc2}>- Aceitamos cartão |  boleto | TED</Texto>
        <Texto style={estilos.desc2}>- Entregas no metrô & correios</Texto>
        <Texto style={estilos.desc3}>DE SP PRO MUNDO</Texto>

        <View style={estilos.back}>
        <Texto2 style={estilos.titulo2}>Feedback de algumas clientes:</Texto2>
        <Image source={feedback} style={estilos.feedback} />
        <Texto2 style={estilos.titulo}>ॐ</Texto2>
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
    titulo: {
        color: '#8B008B',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5
    },
    titulo2: {
        color: '#8B008B',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desc1: { //descições da loja
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10,
    },
    desc2: { //descições da loja
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desc3: { //descições da loja
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    feedback: {
        width: '100%',
        height: 620,
        borderRadius: 30,
    },
    back: {
        margin: 15,
    }
})