import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'

import styles from './styles'

class SectionScreen  extends Component {
    render(){
    return ( 
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.Buttonexit} onPress={()=> this.props.navigation.navigate('Home')}>SAIR</Text>
               </View>
               <View style={styles.containerProfile}>
                    <View style={styles.profileImage}>
                        <Image style={styles.image} source={{uri: 'https://avatars0.githubusercontent.com/u/42282908?v=4'}}  />
                        <Text style={styles.textInfo} > Jadson Santos </Text>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.textInfo}> 21 Anos </Text>
                        <Text style={styles.textInfo}> SC </Text>
                        <Text style={styles.textInfo}> Developer </Text>
                    </View>
               </View>
               <View styles={styles.main}>
                        <Text style={styles.buttonsMain} onPress={()=> this.props.navigation.navigate('User')} > CRIAR USUÁRIO  </Text>
                        <Text style={styles.buttonsMain} onPress={()=> this.props.navigation.navigate('Notas')}> LANÇAR NOTAS </Text>
                        <Text style={styles.buttonsMain} onPress={()=> this.props.navigation.navigate('Aluno')} > RANK </Text>
                </View>
            </View> 
        )
    }
}

export default SectionScreen