import React from "react";
import { View,Text,StyleSheet } from "react-native";
import FlatList from "../FlatList";

export function Home(){
    return(
        <View style={styles.container}>
            <Text id="home">Home</Text>
            <Text id="msg"></Text>
            <FlatList/>
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
