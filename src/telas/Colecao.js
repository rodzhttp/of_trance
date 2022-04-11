//importações
import React from 'react';
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import topo from '../../assets/topo2.png';
import prod1 from '../../assets/prod1.png';
import prod2 from '../../assets/prod2.png';
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto.js';

//constante pra receber o tamanho da imagem 
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
            <View style={estilos.colecao2}>
                <Texto style={estilos.produto}>Macacão curto com manga flare</Texto> 
                <Texto style={estilos.preco}>R$100,00</Texto>    
            </View>
        </View>
        <View style={estilos.colecao}>
            <Image source={prod2} style={estilos.imgproduto}/>
            <View style={estilos.colecao2}>
                <Texto style={estilos.produto}>Macacão curto com manga flare</Texto> 
                <Texto style={estilos.preco}>R$100,00</Texto>    
            </View>
        </View>
        <View style={estilos.colecao}>
            <Image source={prod2} style={estilos.imgproduto}/>
            <View style={estilos.colecao2}>
                <Texto style={estilos.produto}>Macacão curto com manga flare</Texto> 
                <Texto style={estilos.preco}>R$100,00</Texto>    
            </View>
        </View>


    </>
}

const estilos = StyleSheet.create({
    preco:{ //preço do produto 1
        color: '#4B0082',
        fontWeight: 'bold',
        fontSize: 25,
        // lineHeight: 50,
        // marginHorizontal: 20

    },
    produto: {
        color: '#4B0082',
        fontWeight: 'bold',
        lineHeight: 20,
        marginTop: 45,

    },
    imgproduto: { //imagem do produto
        width: 80,
        height: 80,
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 15,
        
    },
    colecao2: {

    },
    colecao: { //
        flexDirection: 'row',

    },
    desc: { //descições da loja
        fontSize: 16,
        fontWeight: 'bold'

    },
    titulo: { //titulo "ravestore"
        color: '#4B0082',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 60,
        textAlign: 'center'

    },
    cabecalho:{ //cabeçalho inicial
        paddingVertical: 10, //padding de cima e baixo
        paddingHorizontal: 20, //padding dos lados

    },
    img_topo: { //imagem do topo
        width: '100%',
        height: valor

    },
});