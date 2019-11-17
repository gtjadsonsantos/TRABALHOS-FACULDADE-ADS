import { StyleSheet, Dimensions } from 'react-native'

const style = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#10164a'
    },
    inputs:{
        width: Dimensions.get('screen').width,
        textAlign: 'center'
    },
    containerCertification:{
        width: Dimensions.get('window').width,
        padding: 10,
        alignItems: 'center'
    },
    imageCertification:{
        width: 300,
        height: 190
    },
    containerSearch:{
        width: Dimensions.get('window').width,
        padding: 10,
        alignItems: 'center'
    },
    containerHistory:{
        width: Dimensions.get('window').width,
        padding: 10,
        marginTop: 20,
        alignItems: 'center'
    },
    title:{
        color: '#fff' 
    },
    containerGrades:{
        padding: 10,
        alignItems: 'center'
    },
    textNameGrades:{
        color: '#fff'
    },
    containerlistOne:{
        width: Dimensions.get('window').width,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    grade:{
        color: '#ff0000'
    },
    containerRank:{
        width: Dimensions.get('window').width,
        padding: 10,
        alignItems: 'center',
    },
    listStudents:{
        alignItems:'center',
        flexDirection: 'row'
    },
    containerColumns:{
      display: 'flex',
      flexDirection: 'row',
     justifyContent: 'space-around'  
    },
    columnName:{
        color: '#fff',
        marginRight: 5,
        textAlign: 'center',
        fontSize: 11
    },
    containerlistTwo:{
        color: '#fff',
        marginRight: 5,
        textAlign: 'center',
        fontSize: 11,
    },
    statusStudent:{
        color: '#000',
        marginRight: 25
    }
   
})

export default style