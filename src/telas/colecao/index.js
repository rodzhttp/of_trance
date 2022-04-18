import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Topo from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/colecao/componentes/topo.js'
import Detalhes from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/colecao/componentes/detalhes.js';
import Produtos from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/colecao/componentes/produtos';
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';

export default function Colecao({ topo, detalhes, produtos }){
    return <> 

        <Topo {...topo}/>
        
        <View style={estilos.cabecalho}>
            <Detalhes {...detalhes}/>
            <Produtos {...produtos}/>
            
        </View>

    </>
}

const estilos = StyleSheet.create({
    cabecalho:{ //cabeçalho inicial
        paddingVertical: 10, //padding de cima e baixo
        paddingHorizontal: 20, //padding dos lados

    }
});