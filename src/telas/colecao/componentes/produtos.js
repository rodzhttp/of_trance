import React from "react";
import { View } from 'react-native';
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';

export default function Produtos({ titulo, lista }){
    return <>
    <Texto>{ titulo }</Texto>
    {/* {
        lista.map(({nome}) => {
            return <View key= { nome }>
                <Texto>{nome}</Texto>
            </View>    
        })
    } */}
    </>
}
