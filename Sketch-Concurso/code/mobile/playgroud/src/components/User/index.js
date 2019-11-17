import React, {Component} from 'react'
import { View, TextInput,Text } from 'react-native'

import styles from './styles'

class UserScreen  extends Component {
    render(){
    return (
        <View style={styles.container}>
            <View style={styles.containerInputs}>
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Nome'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Nome do Pai'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Nome da Mãe'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Cidade'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Data de Nascimento'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'E-mail'} />
                <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder={'Código Interno'}/>
            </View>
            <View style={styles.containerButton}>
                <Text style={styles.button}> CRIAR </Text>
            </View>
        </View> 
        )
    }
}

export default UserScreen