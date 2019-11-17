import React, {Component} from 'react'
import { View, Text, Image, TextInput,ScrollView, SafeAreaView} from 'react-native'
import 'react-navigation'
import styles   from './styles.js'

class AlunoScreen extends Component {
    render(){
        const grade = 0
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.containerSearch} >
                    <TextInput style={styles.inputs} placeholderTextColor="#fff" placeholder="Código Interno"/>
                </View> 
                <View style={styles.containerCertification} >
                    <Image style={styles.imageCertification} source={{uri:'https://github.com/jadson179/Trabalhos-Faculdade-ADS/blob/master/Sketch-Concurso/imgs/web/sketch-5.png?raw=true'}}/>
                </View> 
                <View style={styles.containerHistory}>
                    <Text style={styles.title}>HISTÓRICO</Text>
                    <View style={styles.containerGrades}>
                        <View style={styles.containerlistOne}>
                            <Text  style={styles.textNameGrades}>Matemática</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>60</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                        </View>
                    </View>
                    <View style={styles.containerGrades}>
                        <View style={styles.containerlistOne}>
                            <Text  style={styles.textNameGrades}>Português</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>60</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                        </View>
                    </View>
                    <View style={styles.containerGrades}>
                        <View style={styles.containerlistOne}>
                            <Text  style={styles.textNameGrades}>Geografia</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>60</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                        </View>
                    </View>
                    <View style={styles.containerGrades}>
                        <View style={styles.containerlistOne}>
                            <Text  style={styles.textNameGrades}>Inglês</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>60</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                        </View>
                    </View>
                    <View style={styles.containerGrades}>
                        <View style={styles.containerlistOne}>
                            <Text  style={styles.textNameGrades}>Ciências</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>60</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                        </View>
                    </View>
                    <View style={styles.containerGrades}>
                        <View style={styles.containerlistOne}>
                            <Text  style={styles.textNameGrades}>Física</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>60</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                        </View>
                    </View>
                    <View style={styles.containerGrades}>
                        <View style={styles.containerlistOne}>
                            <Text  style={styles.textNameGrades}>Ed. física</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                            <Text  style={styles.grade}>60</Text>
                            <Text  style={styles.grade}>{ grade}</Text>
                        </View>
                    </View>
                    <View style={styles.containerRank}>
                        <View style={styles.containerRank}>
                            <Text style={styles.title} >Rank</Text>
                        </View>
                        <View style={styles.containerColumns}>
                            <Text style={styles.columnName}>Ranking</Text>
                            <Text style={styles.columnName}>Nome do Auluno</Text>
                            <Text style={styles.columnName}>Código Interno</Text>
                            <Text style={styles.columnName}>Média Final</Text>
                        </View>
                        <View style={styles.containerlistTwo}>
                            <View style={{backgroundColor: '#fff', flexDirection: "row", borderRadius: 10}}>
                                <Text style={styles.statusStudent}>1</Text>
                                <Text style={styles.statusStudent}>Jadson Santos</Text>
                                <Text style={styles.statusStudent}>000001</Text>
                                <Text style={styles.statusStudent}>100</Text>
                            </View>
                        </View>
                        <View style={styles.containerlistTwo}>
                            <View style={{backgroundColor: '#fff', flexDirection: "row", borderRadius: 10, marginTop: 10}}>
                                <Text style={styles.statusStudent}>2</Text>
                                <Text style={styles.statusStudent}>Jadson Santos</Text>
                                <Text style={styles.statusStudent}>000001</Text>
                                <Text style={styles.statusStudent}>100</Text>
                            </View>
                        </View>
                        <View style={styles.containerlistTwo}>
                            <View style={{backgroundColor: '#fff', flexDirection: "row", borderRadius: 10, marginTop: 10}}>
                                <Text style={styles.statusStudent}>3</Text>
                                <Text style={styles.statusStudent}>Jadson Santos</Text>
                                <Text style={styles.statusStudent}>000001</Text>
                                <Text style={styles.statusStudent}>100</Text>
                            </View>
                        </View>
                        <View style={styles.containerlistTwo}>
                            <View style={{backgroundColor: '#fff', flexDirection: "row", borderRadius: 10, marginTop: 10}}>
                                <Text style={styles.statusStudent}>4</Text>
                                <Text style={styles.statusStudent}>Jadson Santos</Text>
                                <Text style={styles.statusStudent}>000001</Text>
                                <Text style={styles.statusStudent}>100</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        )
    }
}

export default AlunoScreen

