import React from "react";
import Estilos from './src/pages/Estilos'
import { SafeAreaView,Text,StyleSheet,StatusBar, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { Routes } from "./src/Routes"; 


export default function App(){
  return(
      <NavigationContainer>
        <StatusBar backgroundColor={"transparent"} barStyle={"light-content"} translucent={true}/>
        <Routes/>
      </NavigationContainer>
  )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  }
})
