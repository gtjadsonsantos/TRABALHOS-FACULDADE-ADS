import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#10164a'
    },
    header:{
        width: Dimensions.get('window').width,
        height: 100,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    Buttonexit:{
        backgroundColor: '#fff',
        height: 50,
        width: 100,
        marginRight: 10,
        borderRadius: 15,
        textAlign: "center",
        padding: 14,
        fontWeight: "bold",
        color: '#bababa'
    },
    containerProfile: {
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        justifyContent: "space-between"
    },
    profileImage:{
        width: 130,
        height: 150,
        alignItems: 'center',
        padding: 15
    },
    profileInfo:{
        width: 240,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15

    },
    textInfo:{
        color: '#fff'
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 50
    },
    main:{
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
        padding: 10,
        height: 200,
        display: 'flex',
        alignItems: 'center',
    
 
    },
    buttonsMain:{
        color: '#fff',
        height: 60,
        width: 270,
        textAlign: 'center',
        padding: 20,
        marginTop: 60,
        backgroundColor: '#050b36',
    },

})

export default styles