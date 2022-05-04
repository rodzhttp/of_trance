import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native';

//imagens dos produtos
import img from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod1.png';
import img2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod2.png';
import img3 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod3.png';
import img4 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod4.png';
import img5 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod5.png';
import img6 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod6.png';
import img7 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod7.png';
import img8 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod8.png';

export default function Produtos(){
    return <>
        <ScrollView style={estilos.prodback}>

            <Texto2 style={estilos.loja}>Loja</Texto2>

            <View style={estilos.viewprod}>
            <TouchableOpacity>
                <Image source={img} style={estilos.img}/>
                <Texto style={estilos.prod}>PRODUTO</Texto>
                <Texto style={estilos.desc}>descriçaum do produtu</Texto>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={img2} style={estilos.img}/>
                <Texto style={estilos.prod}>PRODUTO 2</Texto>
                <Texto style={estilos.desc}>descriçaum do produtu</Texto>
            </TouchableOpacity>
            </View>

            <View style={estilos.viewprod}>
            <TouchableOpacity>
                <Image source={img3} style={estilos.img}/>
                <Texto style={estilos.prod}>PRODUTO 3</Texto>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={img4} style={estilos.img}/>
                <Texto style={estilos.prod}>PRODUTO 4</Texto>
            </TouchableOpacity>
            </View>
            
            <View style={estilos.viewprod}>
            <TouchableOpacity>
                <Image source={img5} style={estilos.img}/>
                <Texto style={estilos.prod}>PRODUTO 5</Texto>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={img6} style={estilos.img}/>
                <Texto style={estilos.prod}>PRODUTO 6</Texto>
            </TouchableOpacity>
            </View>

            <View style={estilos.viewprod}>
            <TouchableOpacity>
                <Image source={img7} style={estilos.img}/>
                <Texto style={estilos.prod}>PRODUTO 7</Texto>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={img8} style={estilos.img}/>
                <Texto style={estilos.prod}>PRODUTO 8</Texto>
            </TouchableOpacity>
            </View>

        </ScrollView>
        
    
    </>
}

const estilos = StyleSheet.create({
    // PRODUTOS
    viewprod: {
        flexDirection: "row",
        justifyContent: "space-around", 
        textAlign: 'center',
        paddingVertical: 15,
    },

    img: {
        width: 150,
        height: 150,
        borderRadius: '10px',
    },

    prod: {
        lineHeight: 50,
        fontSize: 15,
        fontWeight: 'bold',
    },

    desc: {
        lineHeight: 10,
        fontSize: 12,
    },

    prodback: {
        backgroundColor: '#F0FFFF',
    },

    loja: {
        color: '#8B008B',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 20,
    },

})