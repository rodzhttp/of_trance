import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import prod1 from '../../../assets/prod1.png';
import prod2 from '../../../assets/prod2.png';
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto.js';
import Topo from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/colecao/componentes/topo.js'
import Detalhes from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/colecao/componentes/detalhes.js';

export default function Colecao(){
    return <> 
        <Topo/>
        
        <View style={estilos.cabecalho}>
            <Detalhes/>
        </View>

        {/* <View style={estilos.colecao}>
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
            <Image source={prod1} style={estilos.imgproduto}/>
            <View style={estilos.colecao2}>
                <Texto style={estilos.produto}>Macacão curto com manga flare</Texto> 
                <Texto style={estilos.preco}>R$100,00</Texto>    
            </View>
        </View> */}

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
    cabecalho:{ //cabeçalho inicial
        paddingVertical: 10, //padding de cima e baixo
        paddingHorizontal: 20, //padding dos lados

    },
});