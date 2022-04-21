import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import img from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod1.png';
import img2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod2.png';
import img3 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod3.png';


const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 520;
const valor = altura / largura * width;

export default function Produtos(){
    return <>
        <Texto2 style={estilos.titulo}>ॐ RAVESTORE</Texto2>

        <Texto style={estilos.desc1}>Confecção à mão<br/>Totalmente singular</Texto>
        <Texto style={estilos.desc1}></Texto>
        <Texto style={estilos.desc2}>- Roupas a pronta entrega e encomendas</Texto>
        <Texto style={estilos.desc2}>- Aceitamos cartão |  boleto | TED</Texto>
        <Texto style={estilos.desc2}>- Entregas no metrô & correios</Texto>

        <View style={estilos.cabecalho}>
            
        
        <Texto2 style={estilos.promotitulo}>PROMOÇÕES</Texto2>

        <TouchableOpacity>
            <Image source={img3} style={estilos.img}/>
            <Texto style={estilos.promo}>Cropped corselet tomara que caia</Texto>
            <Texto style={estilos.preco}>APENAS R$45</Texto>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={img2} style={estilos.img}/>
            <Texto style={estilos.promo}>Macacão curto com manga flare preto</Texto>
            <Texto style={estilos.preco}>APENAS R$85</Texto>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={img} style={estilos.img}/>
            <Texto style={estilos.promo}>Macacão curto com manga flare verde</Texto>
            <Texto style={estilos.preco}>APENAS R$85</Texto>
        </TouchableOpacity>

        </View>
    
    </>
}

const estilos = StyleSheet.create({
    // PROMOÇÕES
    cabecalho: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    promotitulo: {
        color: '#8B008B',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingVertical: 10 
    },
    img: {
        width: '100%',
        height: valor,
        marginVertical: 10,
        borderRadius: '20px'
    },
    promo:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        
    },
    descpromo: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 20
    },
    preco: {
        color: '#4B0082',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingBottom: 50,

    },




    // TOPO
    titulo: { //titulo "ravestore"
        color: '#4B0082',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 13
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
})