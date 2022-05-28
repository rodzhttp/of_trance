import React, {Fragment} from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import promotions from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/utils/products.js'
import { StyleSheet, Image, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 520;
const valor = altura / largura * width;

export default function Produtos(){
const navigation = useNavigation();

    return <>
        <ScrollView style={estilos.prodback}>

            <Texto2 style={estilos.loja}>Loja</Texto2>

            { promotions.map( (promotion) => { return (

                <Fragment key={promotion.id}> 
                <View style={estilos.background}>

                    <TouchableOpacity>
                        <Image source={promotion.imgUrl} style={estilos.img} 
                        onClick={()=> navigation.navigate('Detalhes', {promotion})}/>
                    </TouchableOpacity>

                    <View style={estilos.packprod}>
                        <Texto style={estilos.promo}>{promotion.title}</Texto>
                        <Texto2 style={estilos.price}>DE R${promotion.price}</Texto2> 
                        <Texto2 style={estilos.price2}>POR APENAS R${promotion.price2}</Texto2> 
                    </View>

                </View>

                </Fragment> ) } ) }
        </ScrollView>    
    </> 
}

const estilos = StyleSheet.create({
    // PRODUTOS
    background: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    img: {
        width: '100%',
        height: 330,
        marginVertical: 10,
        borderRadius: '20px'
    },
    promo: {
        fontSize: 19,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    price: {
        color: '#DC143C',
        fontSize: 25,
        fontWeight: 'bold',
    },
    price2: {
        color: '#008000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    title: {
        lineHeight: 5,
        fontSize: 12,
        padding: 4,
        paddingTop: 12,
        fontWeight: 'bold',
    },
    prodback: {
        backgroundColor: '#F0FFFF',
    },
    loja: {
        color: '#8B008B',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 20,
    },
    packprod: {
        marginBottom: 20,
        borderRadius: 50
    },

})