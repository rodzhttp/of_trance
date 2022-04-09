import React from 'react';
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import topo from '../../assets/topo2.png';
import prod1 from '../../assets/prod1.png';
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto.js';

const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 720;
const valor = altura / largura * width;

export default function Colecao(){
    return <> 
        <Image source={topo} style={estilos.img_topo} />

        <View style={estilos.cabecalho}>
            <Texto style={estilos.titulo}>ॐ RAVESTORE</Texto>
            <Texto style={estilos.desc}>- Roupas a pronta entrega e encomendas</Texto>
            <Texto style={estilos.desc}>- Entregas no metrô & correios</Texto>
        </View>

        <View style={estilos.colecao}>
            <Image source={prod1} style={estilos.imgproduto}/>
            <Texto style={estilos.prod1}>Macacão curto com manga flare</Texto>         
        </View>
        <Texto style={estilos.preco1}>R$100,00</Texto>
        

    </>
}

const estilos = StyleSheet.create({
    preco1:{
        color: '#4B0082',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 50,
        marginHorizontal: 20

    },
    prod1: {
        color: '#4B0082',
        fontWeight: 'bold',
        lineHeight: 80,

    },
    imgproduto: {
        width: 80,
        height: 80,
        marginHorizontal: 20,
        marginVertical: 20

    },
    colecao: {
        flexDirection: 'row',

    },
    desc: {
        fontSize: 16,
        fontWeight: 'bold'

    },
    titulo: {
        color: '#4B0082',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 60,
        textAlign: 'center'

    },
    cabecalho:{
        paddingVertical: 10, //padding de cima e baixo
        paddingHorizontal: 20, //padding dos lados

    },
    img_topo: {
        width: '100%',
        height: valor

    },
});