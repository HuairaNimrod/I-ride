import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {db} from '../config'
import {addDoc, collection } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const RequestRide  = () => {
    const auth = getAuth();
    const [startingPoint, setStartingPoint] = useState('')
    const [destination, setDestination] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [notes, setNotes] = useState('')
    

    const navigation = useNavigation()
    const handleRequestRide = async () => {
       
        const user = auth.currentUser?.uid
        const docRef = await addDoc(collection(db, "trip"), {
            user,
            startingPoint,
            destination,
            time,
            date,
            notes,
            complete : false,
            creationDateTime: new Date(),
            rideType: 'request'

            
          });
        navigation.navigate("Home")
        
            }
    
    
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.inputContainer}>
            <Text>From</Text>
            <TextInput 
            placeholder='Manwaring' 
            //value={ }
            onChangeText = {text => setStartingPoint(text)}
            style = {styles.input}
            />
            <Text>To</Text>
            <TextInput 
            placeholder='Fat Cats - Rexburg' 
            //value={ }
            onChangeText = {text => setDestination(text)}
            style = {styles.input}
            />
            <Text>Time</Text>
            <TextInput 
            placeholder='12:25' 
            //value={ }
            onChangeText = {text => setTime(text)}
            style = {styles.input}
            />
            <Text>Date</Text>
            <TextInput 
            placeholder='04/01/2023' 
            
            onChangeText = {text => setDate(text)}
            style = {styles.input}
            />
            <Text>Comments</Text>
            <TextInput 
            placeholder='Type your message here...' 
            //value={ }
            multiline= {true}
            numberOfLines = {4}
            onChangeText = {text => setNotes(text)}
            style = {styles.input}
            
            />
            
            
        </View>
        <View>
            <TouchableOpacity
            onPress = {handleRequestRide}
            
            style ={[styles.button]}>
                <Text style={[styles.button, styles.buttonText]}>Request</Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
  )
}

export default RequestRide

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    inputContainer : {
        width: '90%',

    }, 
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 5,

    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button : {
        backgroundColor: '#0702F9',
        width: '90%',
        padding: 7,
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',
    },
    
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    
    
})