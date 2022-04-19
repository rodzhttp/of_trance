import React from 'react';
import { View } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import Colecao  from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Home/index.js';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {

  const [fonteCarregada] = useFonts ({ //constante que recebe as fontes
    'MontSerratRegular': Montserrat_400Regular,
    'MontSerratBold': Montserrat_700Bold,
  })
  
  if (!fonteCarregada) { //se a fonte não estiver carregada, ele retorna uma view vazia(tela branca)
    return <View/>; 
  }

  //return do app (principal)
  return <> <NavigationContainer>  
    <Routes />
  </NavigationContainer> </>
}