import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, ScrollView, Image, Dimensions, View } from 'react-native';

const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 520;
const valor = altura / largura * width;

export default function Detalhes2({route}){
    const {products} = route.params
    return <>
        <ScrollView style={estilos.background} >

            <Image source={products.imgUrl} style={estilos.img}/>
            <Texto style={estilos.promo}>{products.title}</Texto>
            <Texto2 style={estilos.price}>POR APENAS R${products.price2}</Texto2> 
            <Texto2 style={estilos.desc}>{products.desc}</Texto2>

        </ScrollView> 
    </>
}

const estilos = StyleSheet.create({
    background: {
        paddingHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#F0FFFF',
    },
    img: {
        width: '100%',
        height: valor,
        marginVertical: 10,
        borderRadius: '20px'
    },
    promo: {
        fontSize: 19,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    price: {
        color: '#DC143C',
        fontSize: 23,
        fontWeight: 'bold',
    },
    price2: {
        color: '#008000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 20,
        marginVertical: 8,
        backgroundColor: '#FFE4E1',
        padding: 8,
        borderRadius: '10px'
    }
})