import React from 'react';
import { StyleSheet } from 'react-native';
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto.js';

export default function Detalhes () {
    return <>

            <Texto style={estilos.desc}>- Roupas a pronta entrega e encomendas</Texto>
            <Texto style={estilos.desc}>- Entregas no metrô & correios</Texto>
    </>
}

const estilos = StyleSheet.create({

    desc: { //descições da loja
        fontSize: 16,
        fontWeight: 'bold'

    },
})