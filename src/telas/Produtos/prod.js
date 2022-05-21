import React, {Fragment} from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import products from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/utils/products.js'
import { StyleSheet, Image, View, ScrollView, TouchableOpacity, onClick } from 'react-native';

//imagens dos produtos
import img from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod1.png';
import img2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod2.png';
import img3 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod3.png';
import img4 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod4.png';
import img5 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod5.png';
import img6 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod6.png';
import img7 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod7.png';
import img8 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/assets/prod8.png';

export default function Produtos(){

    function filterDesc(desc) {
        if(desc.length < 22) {
            return desc
        }
        return `${desc.substring(0, 20)}...`
    }

    return <>
        <ScrollView style={estilos.prodback}>

            <Texto2 style={estilos.loja}>Loja</Texto2>

            { products.map( (product) => {
            return (
                <Fragment key={product.id}> 
                    <View style={estilos.viewprod}>
                        <TouchableOpacity>
                            <Image source={product.imgUrl} style={estilos.img}
                            onClick={()=> navigation.navigate('Detalhes', {product})}/>
                            <Texto style={estilos.title}> {filterDesc('Macacão verde com manga preta')} </Texto>
                            <Texto style={estilos.price}>APENAS R${product.price}</Texto>
                        </TouchableOpacity> 
                        
                    </View> 

                    

                </Fragment> ) } ) }




            

        </ScrollView>
        
    
    </>
}

const estilos = StyleSheet.create({
    // PRODUTOS
    viewprod: {
        flexDirection: "row",
        justifyContent: "space-around", 
        textAlign: 'center',
        paddingVertical: 15,
    },

    img: {
        width: 150,
        height: 150,
        borderRadius: '10px',
    },

    price: {
        lineHeight: 45,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4B0082',
        backgroundColor: '#FFF0F5',
        marginVertical: 7,
        borderRadius: 7
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

})