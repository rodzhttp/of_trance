import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto'
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import img from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod1.png';
import img2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod2.png';
import img3 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod3.png';


export default function Prod2(){
    return <>

        <View style={estilos.container}>
        <TouchableOpacity>
            <Image source={img} style={estilos.img}/>
            <Texto style={estilos.prod}>PRODUTO</Texto>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={img2} style={estilos.img}/>
            <Texto style={estilos.prod}>PRODUTO2</Texto>
        </TouchableOpacity>
        </View>

        <View style={estilos.container}>
        <TouchableOpacity>
            <Image source={img} style={estilos.img}/>
            <Texto style={estilos.prod}>PRODUTO</Texto>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={img2} style={estilos.img}/>
            <Texto style={estilos.prod}>PRODUTO2</Texto>
        </TouchableOpacity>
        </View>
        

        

    </>

    
}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around", 
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: '10px',
    },
    prod: {
        fontSize: 15,
        fontWeight: 'bold'}
})