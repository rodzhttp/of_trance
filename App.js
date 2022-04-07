import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Colecao from './src/telas/Colecao';

export default function App() {
  
  return <SafeAreaView style={styles.container}>
          <Colecao />
         </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
  },
});

