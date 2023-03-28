import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getAuth } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const Confirm  = () => {
    const auth = getAuth();
    const [startingPoint, setStartingPoint] = useState('')
    const [destination, setDestination] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')
    const [notes, setNotes] = useState('')
    

    const navigation = useNavigation()

   
    
    
  return (
    <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "blue",
            marginBottom: 15,
          }}
        >
          Confirm Details
        </Text>
        <View style={styles.rideBox} >
            <View style = {styles.info}> 
            <View >
                <Text style={styles.title}>Route</Text>
                <Text>Place</Text>
            </View>
            <View >
                <Text style={styles.title}>Price</Text>
                <Text>Price</Text>
                </View>
            </View>
            <View style = {styles.info}> 
            <View >
                <Text style={styles.title}>Date</Text>
                <Text>November 1</Text>
            </View>
            <View >
                <Text style={styles.title}>Time</Text>
                <Text>Time</Text>
            </View>
            </View>
            <View style={{padding: 10}}>
                <Text style={styles.title}>Description</Text>
                <Text>Comments</Text>
            </View>

            </View>
            <View
        style = {styles.buttonContainer}>
            <TouchableOpacity
            
            style ={[styles.button, styles.buttonOutline]}>
                <Text style={[styles.button, styles.buttonOutlineText]}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style ={styles.button}
            >
                <Text style={[styles.button, styles.buttonText]}>Confirm</Text>
            </TouchableOpacity>
            

        </View>
    </SafeAreaView>
  )
}

export default Confirm

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    inputContainer : {
        width: '90%',

    }, 
    buttonContainer: {
        width: '60%',
        flexDirection: 'column',
        
        
        marginTop: 40,
    },
    label: {
        color: '#0702F9',
        fontWeight: "500",
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 5,

    },
    buttonContainer: {
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button : {
        backgroundColor: '#0702F9',
        width: 200,
        padding: 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    buttonOutline :{
        backgroundColor: '#C2C2C2',
        marginTop: 5,
        borderColor: '#353535',
        borderWidth: 1,
    },
    info: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        paddingTop: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText : {
        backgroundColor: '#C2C2C2',
        fontWeight: '700',
        fontSize: 16,
        width: '99%',
        

    },
    rideBox : {
    
        width: 300,
        maxheight: 300,
        borderWidth: 2,
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        padding: 5,
        borderColor: 'blue',
        borderStyle: 'solid', 
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 2 , shadowOpacity: 0.8, elevation: 2 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 5,
        
        },
        title: {
            fontSize: 15,
            fontWeight: 'bold',
        }
    
    
})