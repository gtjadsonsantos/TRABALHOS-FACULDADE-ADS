import React, {Component }  from 'react'
import { View, Text, Image, TextInput, Button, KeyboardAvoidingView} from 'react-native'
import 'react-navigation'
import styles   from './styles.js'

export default class HomeScreen extends Component {
    render(){
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height" >
            <View style={styles.header}>
                <Button color={"#dbdbdb"} title="Aluno" onPress={()=> this.props.navigation.navigate('Aluno')} />
                <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpguSRxaXz4jL4ENt0yfMlsP9TaDxIiVUx4zq37WTuxPRCWfuz"}} style={styles.language} />
            </View>
            <Image style={styles.logoImage} source={{uri:"https://seeklogo.com/images/M/Marinha_do_Brasil-logo-1CCBA5BEDA-seeklogo.com.png"}}  />
            <View  style={styles.container} >
                <TextInput style={styles.inputs} placeholder={'NOME DO USUÁRIO'} />
                <TextInput style={styles.inputs} placeholder={'SENHA'} />
            </View>
            <View  style={styles.containerButtons} >
                <Text style={styles.buttons} onPress={()=> this.props.navigation.navigate('Section')}> ACESSAR CONTA</Text>
                <Text style={styles.buttons} onPress={()=> this.props.navigation.navigate('NewUser')}> CRIAR CONTA</Text>
            </View>
        </KeyboardAvoidingView>
        )
    }
}
