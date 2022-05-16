import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, ScrollView} from 'react-native';


export default function Detalhes(){
    return <>
        <ScrollView style={estilos.sobreback} >

            <Texto2 style={estilos.sobre}> detalhes </Texto2>

        </ScrollView> 
    </>
}

const estilos = StyleSheet.create({
   
})