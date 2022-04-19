import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import Prod2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Produtos/componentes/prod2'
import img from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod1.png';
import img2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod2.png';
import img3 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod3.png';

const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 520;
const valor = altura / largura * width;

export default function Produtos(){
    return <>
        <ScrollView style={estilos.prod2}>

        <Texto>ॐ RAVESTORE</Texto>

            <View style={estilos.viewprod}>
                <Prod2/>
                <Prod2/>
            </View>
            <View style={estilos.viewprod}>
                <Prod2/>
                <Prod2/>
            </View>
            <View style={estilos.viewprod}>
                <Prod2/>
                <Prod2/>
            </View>
            <View style={estilos.viewprod}>
                <Prod2/>
                <Prod2/>
            </View>
            <View style={estilos.viewprod}>
                <Prod2/>
                <Prod2/>
            </View>
        </ScrollView>
    
    </>
}

const estilos = StyleSheet.create({
    // PRODUTOS
    viewprod: {
        flexDirection: "row",
        justifyContent: "space-around", 
        textAlign: 'center',},
        

    prod: {width: 150,
        height: 150,
        backgroundColor: "blue",
        margin: 10},
    prod2: {
        backgroundColor: '#F0FFFF',}

})