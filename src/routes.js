import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import prod from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/colecao/componentes/produtos.js'
import index from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/telas/colecao/index.js'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='index' component={index} options={{headerShown: false}} />
            <Tab.Screen name='prod' component={prod} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}