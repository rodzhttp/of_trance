import React from 'react';
import { View } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import { Kanit_400Regular, Kanit_700Bold } from '@expo-google-fonts/kanit';

import Routes from './src/routes';

export default function App() {

  const [fonteCarregada] = useFonts ({ //constante que recebe as fontes
    'MontSerratRegular': Montserrat_400Regular,
    'MontSerratBold': Montserrat_700Bold,
    'KanitRegular': Kanit_400Regular,
    'KanitBold': Kanit_700Bold,
  })
  
  if (!fonteCarregada) { //se a fonte não estiver carregada, ele retorna uma view vazia(tela branca)
    return <View/>; 
  }

  //return do app (principal)
  return <>  
    <Routes />
 </>
}