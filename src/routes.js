import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import home from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Home/index.js'
import prod from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Produtos/prod.js'
import sobre from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/Sobre/sobre'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator 
            screenOptions={{
            tabBarActiveBackgroundColor: '#2c0041',
            tabBarInactiveBackgroundColor: '#2c0041',
            tabBarActiveTintColor: '#F0FFFF',
            tabBarInactiveTintColor: '#B0E0E6',
        }}>
            <Tab.Screen name='HOME' component={home} options={{headerShown: false}} />
            <Tab.Screen name='PRODUTOS' component={prod} options={{headerShown: false}} />
            <Tab.Screen name='SOBRE' component={sobre} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}


