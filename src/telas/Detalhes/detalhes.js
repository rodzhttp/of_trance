import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, ScrollView, Image, Dimensions, onClick } from 'react-native';
import { TouchableOpacity } from "react-native-web";

const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 520;
const valor = altura / largura * width;

export default function Detalhes({route}){
    const {promotion} = route.params
    return <>
        <ScrollView style={estilos.background} >

            <Image source={promotion.imgUrl} style={estilos.img}/>
            <Texto style={estilos.promo}>{promotion.title}</Texto>
            <Texto2 style={estilos.price}>DE R${promotion.price}</Texto2> 
            <Texto2 style={estilos.price2}>POR APENAS R${promotion.price2}</Texto2> 
                <TouchableOpacity >
                    <Texto style={estilos.botao}>Comprar</Texto>
                </TouchableOpacity>
            <Texto2 style={estilos.desc}>{promotion.desc}</Texto2>
        

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
        height: 300,
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
    },
    botao: {
        backgroundColor: '#008000',
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 10,
    }
})