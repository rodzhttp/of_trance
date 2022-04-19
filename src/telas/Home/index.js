import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Topo from './componentes/topo'
import Promo from './componentes/promo';

export default function Colecao(){
    return <> 

        <Topo/>

        <ScrollView>
            <View style={estilos.back}>
            <Promo />
            </View>
        </ScrollView>
  
    </>
}

const estilos = StyleSheet.create({
    back: {
        backgroundColor: '#F0FFFF',

    },
})