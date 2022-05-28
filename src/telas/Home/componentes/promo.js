import React, {Fragment} from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, onClick } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import promotions from "../../../utils/promotions";

const width = Dimensions.get("screen").width;
const largura = 720;
const altura = 520;
const valor = altura / largura * width;

export default function Promo(){
const navigation = useNavigation();

    return <>
        <Texto2 style={estilos.titulo}>ॐ RAVESTORE</Texto2>
        <Texto style={estilos.desc1}>Confecção à mão<br/>Totalmente singular</Texto>
        <Texto style={estilos.desc1}></Texto>
        <Texto style={estilos.desc2}>- Roupas a pronta entrega e encomendas</Texto>
        <Texto style={estilos.desc2}>- Aceitamos cartão |  boleto | TED</Texto>
        <Texto style={estilos.desc2}>- Entregas no metrô & correios</Texto>

        <View style={estilos.background}>
        
        <Texto2 style={estilos.promotitulo}>NOVOS PRODUTOS</Texto2>

            { promotions.map( (promotion) => { return (

                <Fragment key={promotion.id}> 
                
                    <TouchableOpacity>
                        <Image source={promotion.imgUrl} style={estilos.img} 
                        onClick={()=> navigation.navigate('Detalhes', {promotion})}/>
                    </TouchableOpacity>

                    <View style={estilos.packprod}>
                        <Texto style={estilos.promo}>{promotion.title}</Texto>
                        <Texto2 style={estilos.price}>DE R${promotion.price}</Texto2> 
                        <Texto2 style={estilos.price2}>POR APENAS R${promotion.price2}</Texto2> 
                    </View>
                    
                </Fragment> ) } ) }
        </View>
    </>
}

const estilos = StyleSheet.create({
    // PROMOÇÕES
    background: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    img: {
        width: '100%',
        height: valor,
        marginVertical: 10,
        borderRadius: '20px'
    },
    promo:{
        fontSize: 19,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    price: {
        color: '#DC143C',
        fontSize: 23,
        fontWeight: 'bold',
    },
    price2: {
        color: '#008000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    packprod: {
        marginBottom: 20,
        borderRadius: 7
    },

    // TOPO
    titulo: { //titulo "ravestore"
        color: '#8B008B',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 13
    },
    desc1: { //descições da loja
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10,
    },
    desc2: { //descições da loja
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    promotitulo: {
        color: '#4B0082',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingVertical: 10 
    },
})