import React from "react";
import Texto from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto';
import Texto2 from 'C:/Users/Rodrigo/Desktop/OFTRANCE/app-of-trance/src/componentes/Texto2';
import { StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native';

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
    return <>
        <ScrollView style={estilos.prodback}>

            <Texto2 style={estilos.loja}>Loja</Texto2>

            <View style={estilos.viewprod}>
            <TouchableOpacity>
                <Image source={img} style={estilos.img}/>
                <Texto style={estilos.desc}>Macacão curto com  </Texto>
                <Texto style={estilos.desc}>manga flare verde </Texto>
                <Texto style={estilos.prec}>APENAS R$85</Texto>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={img2} style={estilos.img}/>
                <Texto style={estilos.desc}>Macacão curto com  </Texto>
                <Texto style={estilos.desc}>manga flare preto </Texto>
                <Texto style={estilos.prec}>APENAS R$85</Texto>
            </TouchableOpacity>
            </View>

            <View style={estilos.viewprod}>
            <TouchableOpacity>
                <Image source={img3} style={estilos.img}/>
                <Texto style={estilos.desc}>Cropped corselet </Texto>
                <Texto style={estilos.desc}>tomara que caia azul </Texto>
                <Texto style={estilos.prec}>APENAS R$45</Texto>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={img4} style={estilos.img}/>
                <Texto style={estilos.desc}>Cropped corselet </Texto>
                <Texto style={estilos.desc}>tomara que caia rosa </Texto>
                <Texto style={estilos.prec}>APENAS R$45</Texto>
            </TouchableOpacity>
            </View>
            
            <View style={estilos.viewprod}>
            <TouchableOpacity>
                <Image source={img5} style={estilos.img}/>
                <Texto style={estilos.prec}>PRODUTO 5</Texto>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={img6} style={estilos.img}/>
                <Texto style={estilos.prec}>PRODUTO 6</Texto>
            </TouchableOpacity>
            </View>

            <View style={estilos.viewprod}>
            <TouchableOpacity>
                <Image source={img7} style={estilos.img}/>
                <Texto style={estilos.prec}>PRODUTO 7</Texto>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={img8} style={estilos.img}/>
                <Texto style={estilos.prec}>PRODUTO 8</Texto>
            </TouchableOpacity>
            </View>

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

    prec: {
        lineHeight: 45,
        fontSize: 20,
        fontWeight: 'bold',
        // color: '#4B0082',
        backgroundColor: '#FFF0F5',
        marginVertical: 8,
        borderRadius: 7
    },

    desc: {
        lineHeight: 5,
        fontSize: 14,
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