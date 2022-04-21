import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto2({ children, style }) {
    return <Text style={ [style, estilos.texto] }>{children}</Text>;
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'KanitRegular'
    }
})