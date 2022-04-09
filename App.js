import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Colecao from './src/telas/Colecao';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';

export default function App() {

  const [fonteCarregada] = useFonts ({ //constante que recebe as fontes
    'MontSerratRegular': Montserrat_400Regular,
    'MontSerratBold': Montserrat_700Bold
  })

  if (!fonteCarregada) {
    return <View/>; 
  }

  return <SafeAreaView style={styles.container}> 
          <Colecao />
         </SafeAreaView>; 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',

  },
});

