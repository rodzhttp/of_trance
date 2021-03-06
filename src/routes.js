import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//importando o react navigation (biblioteca para configurar as telas)

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//importando o Tab navigator (usado para navegar entre as telas principais)

import { createStackNavigator } from '@react-navigation/stack'
//importanto o Stack navigator (usado para navegar entre as telas de detalhes)

import { Entypo } from '@expo/vector-icons'
//importando os icones

import home from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Home/index.js'
import prod from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Produtos/prod.js'
import sobre from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Sobre/sobre'
import detalhes from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Detalhes/detalhes'
//importando os arquivos de telas

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={home}/>
        <Stack.Screen name='Detalhes' component={detalhes}/>
    </Stack.Navigator> 
)}
//constantes com as telas de detalhes das promoções
const ProductStackNavigator = () => {
    return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Produtos' component={prod}/>
        <Stack.Screen name='Detalhes' component={detalhes}/>
    </Stack.Navigator> 
)}
//constantes com as telas de detalhes dos produtos


export default function Routes() {
    return(
    <NavigationContainer> 

        <Tab.Navigator 
            screenOptions={{
            tabBarStyle: {
                height: 60, 
                backgroundColor: '#3B0066', 
                paddingBottom: 5,
                paddingTop: 5,
                borderTopColor: '#3B0099', //estilo do tab
            },
            tabBarActiveTintColor: '#F0FFFF',
            tabBarInactiveTintColor: '#BA88D3',
        }}>
            <Tab.Screen 
            name='Home' component={HomeStackNavigator} options={{headerShown: false,
            tabBarIcon: ({size, color}) => (
                <Entypo name='home' size={size} color={color}/> )}}/> 

            <Tab.Screen 
            name='Produtos' component={ProductStackNavigator} options={{headerShown: false,
            tabBarIcon: ({size, color}) => (
                <Entypo name='feather' size={size} color={color}/> )}}/>

            <Tab.Screen 
            name='Sobre' component={sobre} options={{headerShown: false,
            tabBarIcon: ({size, color}) => (
                <Entypo name='heart' size={size} color={color}/> )}}/>

        </Tab.Navigator>
    </NavigationContainer>    
    //onde ocorrem as navegações das telas
    //Tab.Screen = botões de navegação
)}