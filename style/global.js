import React from "react";
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#FFF8F3'
    },
    headerDefaultText: {
        fontSize: 20
    },
    headerCurrentScreenText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    customHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    content: {
        flex: 9,
    },
});

export default globalStyles;