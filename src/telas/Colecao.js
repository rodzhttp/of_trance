import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo2.png';
import prod1 from '../../assets/prod1.png';

const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 720;
const valor = altura / largura * width;

export default function Colecao(){
    return <> 
        <Image source={topo} style={estilos.topo} />
        <Image source={logo} style={estilos.logo}/>

        <Text style={estilos.titulo}>OF TRANCE</Text>

        <View style={estilos.cabecalho}>
            <Image source={prod1} style={estilos.imgproduto}/>
            <Text style={estilos.prod1}>Macacão curto <br/>com manga flare</Text>
        </View>

        <View style={estilos.colecao}>
            <Text style={estilos.nome}>OF TRANCE</Text>
            <Text>- Roupas a pronta entrega e encomendas</Text>
            <Text>- Entregas no metrô & correios</Text>
            <Text style={estilos.preco}>R$100,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    prod1: {
        lineHeight: 50,
        marginLeft: 20,
    },
    imgproduto: {
        width: 90,
        height: 90,
    },
    logo: {
        width: 200,
        height: 150,
    },
    cabecalho: {
        flexDirection: 'row'
    },
    preco:{
        color: '#191970',
        fontWeight: 'bold',
        lineHeight: 50,
    },
    nome: {
        color: '#191970',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 60,
    },
    colecao:{
        paddingVertical: 10, //padding de cima e baixo
        paddingHorizontal: 20, //padding dos lados

    },
    topo: {
        width: '100%',
        height: valor,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 26,
        color: '#ADD8E6',
        fontWeight: 'bold',
        padding: 10,
    }

});
