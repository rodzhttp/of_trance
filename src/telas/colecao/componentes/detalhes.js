import React from 'react';
import { StyleSheet } from 'react-native';
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto.js';

export default function Detalhes ({desc1, desc2, desc3, desc4}) {
    return <>
        <Texto style={estilos.desc1}>{desc1}</Texto>
        <Texto style={estilos.desc2}>{desc2}</Texto>
        <Texto style={estilos.desc3}>{desc3}</Texto>
        <Texto style={estilos.desc4}>{desc4}</Texto>
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
