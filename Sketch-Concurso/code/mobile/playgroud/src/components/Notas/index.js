import React, {Component} from 'react'
import { View, TextInput, Button, Text } from 'react-native'

import styles from './styles'

class NotasScreen  extends Component {
    render(){
    return (
        <View style={styles.container}>
        <View style={styles.containerInputs}>
            <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Código Interno'} />
            <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Nome da Disciplina'} />
            <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Frequência'} />
            <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Comportamento'} />
            <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Matéria'} />
        </View>
        <View style={styles.containerButton}>
            <Text style={styles.button}> CRIAR </Text>
        </View>
    </View> 
        )   
    }
}

export default NotasScreen