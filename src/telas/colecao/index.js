import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Topo from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/colecao/componentes/topo.js'
import Detalhes from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/colecao/componentes/detalhes.js';
import Produtos from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/colecao/componentes/produtos';

export default function Colecao({ topo, detalhes, produtos }){
    return <> 

        <Topo/>
        
        <View style={estilos.cabecalho}>
            <Detalhes />
            <Produtos />
        </View>

    </>
}

const estilos = StyleSheet.create({
    cabecalho:{ //cabeçalho inicial
        paddingVertical: 10, //padding de cima e baixo
        paddingHorizontal: 20, //padding dos lados

    }
});