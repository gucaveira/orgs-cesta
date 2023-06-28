import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({ item: { nome, imagem } }) {
    return <View style={estilos.item}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        color: "#464646",
        marginLeft: 11,
        fontSize: 16,
        lineHeight: 26
    },

})