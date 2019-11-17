import React, {Component} from 'react'
import { View, TextInput,Text } from 'react-native'

import styles from './styles'

class NewUserScreen  extends Component {
    render(){
    return (
        <View style={styles.container}>
            <View style={styles.containerInputs}>
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Nome'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Senha'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Cpf'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Cidade'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Cargo'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Disciplina'} />
            </View>
            <View style={styles.containerButton}>
                <Text style={styles.button}> CRIAR </Text>
            </View>
        </View> 
        )
    }
}

export default NewUserScreen