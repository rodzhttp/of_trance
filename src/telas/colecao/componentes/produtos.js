import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import { View } from 'react-native';

export default function Produtos({ titulo, lista }){
    return <>
    <Texto>{ titulo }</Texto> 
    {
        lista.map(( nome )=> {
            return <View key={ nome }>
                <Texto>{ nome }</Texto>

            </View>
        })
    }
    </>
}
