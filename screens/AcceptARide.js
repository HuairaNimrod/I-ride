import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {db} from '../config'
import {doc, getDoc, addDoc, collection, updateDoc} from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const AcceptARide  = ({route}) => {
    const auth = getAuth();
    const [seats, setSeats] = useState('');
    const [price, setPrice] = useState('')
    const { id } = route.params;
    

    
    const handleUpdate = async () => {
       
        const user = auth.currentUser?.uid
        const documentRef = doc(db, "trip", id);
        await updateDoc(documentRef, {
            driver: user,
            rideType: 'offered',
            price,
            seats
          });
        
        navigation.navigate("Rides")
        
            }

    const navigation = useNavigation()
    
   
    const handleSeats = (text) => {
        // Only allow input of decimal numbers
        if (/^\d*\.?\d*$/.test(text)) {
          const int = parseInt(text, 10);
          
            setSeats(int);
         
          
        }
      };
      const handlePrice = (text) => {
        // Only allow input of decimal numbers
        if (/^\d*\.?\d*$/.test(text)) {
          const int = parseInt(text, 10);
          
            setPrice(int);
         
          
        }
      };
    
    
    
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter the number of seats that will be available: </Text>
            <TextInput 
            placeholder='1'
            
            value={seats}
            onChangeText={handleSeats}
            keyboardType="decimal-pad"
            style = {styles.input}
            />
            <Text style={styles.label}>Enter the price per seat: </Text>
            <TextInput 
            placeholder='1'
            
            value={price}
            onChangeText={handlePrice}
            keyboardType="decimal-pad"
            style = {styles.input}
            />
            
            
        </View>
        <View>
        <TouchableOpacity
            onPress={() => navigation.navigate('Rides')}
            
            style ={[styles.button, styles.buttonOutline]}>
                <Text style={[styles.button, styles.buttonOutlineText]}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style ={styles.button}
            onPress = {handleUpdate}
            >
                <Text style={[styles.button, styles.buttonText]}>Accept Ride</Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
  )
}

export default AcceptARide

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    inputContainer : {
        width: '90%',

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
        width: '60%',
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
    
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    
    
})