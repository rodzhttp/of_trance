import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import Prod2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Produtos/componentes/prod2'

const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 520;
const valor = altura / largura * width;

export default function Produtos(){
    return <>
        <ScrollView style={estilos.prodback}>

        <Texto2 style={estilos.loja}>Loja</Texto2>

            <View style={estilos.viewprod}>
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
        margin: 8,},

    prodback: {
        backgroundColor: '#F0FFFF',},

    loja: {
        color: '#8B008B',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 20 }

})