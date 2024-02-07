import React from "react";
import { View,Text,StyleSheet } from "react-native";


export function Configs(){
    return(
        <View style={styles.container}>
            <Text>Configurações</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 50,
        backgroundColor:'#4169E1',
        alignContent:'center',
        alignItems: 'center'
    }
})
