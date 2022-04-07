import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 720;
const valor = altura / largura * width;

export default function Colecao(){
    return <> 
        <Image source={topo} style={estilos.topo} />

        <Text style={estilos.titulo}>OF TRANCE</Text>

        <View style={estilos.colecao}>

            <View style={estilos.fornecedor}>
            <Image source={logo} style={estilos.imgproduto}/>
            </View>

            <Text style={estilos.nome}>OF TRANCE</Text>
            <Text>- Roupas a pronta entrega e encomendas</Text>
            <Text>- Entregas no metrô & correios</Text>
            <Text style={estilos.preco}>R$100,00</Text>

        </View>
    </>
}

const estilos = StyleSheet.create({
    imgproduto: {

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
