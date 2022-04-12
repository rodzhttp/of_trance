import React from 'react';
import { StyleSheet } from 'react-native';
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto.js';

export default function Detalhes () {
    return <>
        <Texto style={estilos.desc1}>Confecção à mão | Totalmente singular</Texto>
        <Texto style={estilos.desc2}>- Roupas a pronta entrega e encomendas</Texto>
        <Texto style={estilos.desc3}>- Aceitamos cartão |  boleto | TED</Texto>
        <Texto style={estilos.desc4}>- Entregas no metrô & correios</Texto>
    </>
}

const estilos = StyleSheet.create({
    desc1: { //descições da loja
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 15,

    },
    desc2: { //descições da loja
        fontSize: 14,
        fontWeight: 'bold',
    },
    desc3: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    desc4: {
        fontSize: 14,
        fontWeight: 'bold',
    },
})
