import React from 'react';
import { View } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import { Kanit_400Regular, Kanit_700Bold } from '@expo-google-fonts/kanit';
//importando as fontes que usaremos

import Routes from './src/routes';
//arquivo onde estão as rotas, onde ficam as telas do app

export default function App() {

  const [fonteCarregada] = useFonts ({
    'MontSerratRegular': Montserrat_400Regular,
    'MontSerratBold': Montserrat_700Bold,
    'KanitRegular': Kanit_400Regular,
    'KanitBold': Kanit_700Bold,
  })
//constante que recebe as fontes para o if abaixo
  
  if (!fonteCarregada) {
    return <View/>; 
  }
//IF para se a fonte não estiver carregada, ele retornar uma view vazia (tela branca)
//assim, o app só carrega quando as fontes estão carregadas, e não corre o risco 

//return do app (principal)
  return <>  
    <Routes />
 </>
}

