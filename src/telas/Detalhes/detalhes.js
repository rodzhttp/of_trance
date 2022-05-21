import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, ScrollView, Image } from 'react-native';


export default function Detalhes({route}){
    const {product} = route.params
    return <>
        <ScrollView style={estilos.cabecalho} >

            <Image source={product.imgUrl} style={estilos.img}/>
            <Texto2 style={estilos.descc}>{product.title}</Texto2>
            <Texto2 style={estilos.preco}>APENAS R${product.price}</Texto2>
            
        </ScrollView> 
    </>
}

const estilos = StyleSheet.create({
    cabecalho: {
        paddingHorizontal: 35,
        marginVertical: 10,
    },
    img: {
        width: '100%',
        height: 250,
        marginVertical: 10,
        marginHorizontal: '',
        borderRadius: '20px',
        textAlign: 'center'
    },
    descc: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10,
    },
    preco: {
        color: '#4B0082',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingBottom: 50,
    },
})