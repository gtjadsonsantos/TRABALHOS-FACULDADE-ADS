import { StyleSheet, Dimensions } from 'react-native'

const widthDevice = Dimensions.get("window").width

const style = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#0a0642'
        
    },
    header:{
        width: widthDevice,
        height: 35,
        alignItems: "baseline",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 10

    },
    language:{
        width: 50,
        height: 35,
        marginRight: 20
    },
    logoImage:{
        width: 180,
        height: 235,
        marginTop: 30
    },
    inputs:{
        width: 300,
        backgroundColor: '#fff',
        marginTop: 20,
    },
    containerButtons:{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        paddingTop: 10
    },
    buttons:{
        backgroundColor: '#fff',
        textAlign: 'center',
        width:200,
        height: 40,
        padding: 10,
        marginTop: 10,
        borderRadius: 105,
        color: "#9e9e9e",
        fontWeight: "bold"
    }

    
})

export default style