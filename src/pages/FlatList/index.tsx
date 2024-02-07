import react from 'react'
import {View, Text, FlatList, Button, StyleSheet} from 'react-native'
import Estilos from '../Estilos'


const tarefas =[
    {
        id:'001',
        desc:['Tarefa 01', 'Detalhamento']
    },
    {
        id:'002',
        desc:['Tarefa 02', 'Detalhamento']
    },
    {
        id:'003',
        desc:['Tarefa 03', 'Detalhamento']
    },
    {
        id:'004',
        desc:['Tarefa 04', 'Detalhamento']
    },
    {
        id:'005',
        desc:['Tarefa 05', 'Detalhamento']
    }
]

export default function(){
    return(
        <View style={Estilos.container}>
            <FlatList
                data={tarefas}
                keyExtractor={item=>item.id}
                renderItem={({item})=><Text>Descrição:{item.desc[0]} Detalhamento:{item.desc[1]} </Text>}
            />
        </View>
    )
}