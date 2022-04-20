import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import home from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Home/index.js'
import prod from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Produtos/prod.js'
import sobre from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Sobre/sobre'
import { Entypo, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator 
            screenOptions={{
            tabBarStyle: {
                height: 60, 
                backgroundColor: '#E0FFFF', 
                paddingBottom: 5,
                paddingTop: 5,
                borderTopWidth: 6,
                borderTopColor: '#3B0066',
            },
            tabBarActiveTintColor: '#3B0066',
            tabBarInactiveTintColor: '#BA88D3',
            
        }}>
            <Tab.Screen 
            name='Home' component={home} options={{headerShown: false,
            tabBarIcon: ({size, color}) => (
                <Entypo name='home' size={size} color={color}/> )}}/>

            <Tab.Screen 
            name='Produtos' component={prod} options={{headerShown: false,
            tabBarIcon: ({size, color}) => (
                <Entypo name='feather' size={size} color={color}/> )}}/>

            <Tab.Screen 
            name='Sobre' component={sobre} options={{headerShown: false,
            tabBarIcon: ({size, color}) => (
                <Entypo name='heart' size={size} color={color}/> )}}/>
        </Tab.Navigator>
    )
}


