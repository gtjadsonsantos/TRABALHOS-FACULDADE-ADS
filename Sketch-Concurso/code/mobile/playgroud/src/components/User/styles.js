import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#10164a'
    },
    containerInputs:{
        width: Dimensions.get('window').width,
        marginTop: 15,
        alignItems: 'center'
    },
    inputs:{
        marginTop: 25,
        color: '#fff',
        width: 350,
        backgroundColor: '#050b36',
    },
    containerButton:{
        marginBottom: 20,
        alignItems: 'center'
    },
    button:{
        width: 300,
        height: 50,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#050b36',
        padding: 13
    }
})

export default styles