import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {db} from '../config'
import {doc, getDoc, addDoc, collection, updateDoc} from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const JoinARide  = ({route}) => {
    const auth = getAuth();
    const [seats, setSeats] = useState(1);
    const [totalseats, setTotalSeats] = useState('');
    const [price, setPrice] = useState('')
    const { id } = route.params;
    

    const handleUpdate = async () => {
       
      const user = auth.currentUser?.uid
      const documentRef = doc(db, "trip", id);
      await updateDoc(documentRef, {
          seats : totalseats - seats,
          riders: [user]
        });
      
      navigation.navigate("Rides")
      
          }
    

    const navigation = useNavigation()
    useEffect(() => {
        async function fetchData(){
              
              const documentRef = doc(db, "trip", id);
    
              // Use getDoc to retrieve the document data
              getDoc(documentRef)
                .then((docSnapshot) => {
                  if (docSnapshot.exists()) {
                    // Access the document data using the data() method and set data
                    const data = docSnapshot.data();
                    setTotalSeats(data.seats)
                    setPrice(data.price)

                    
                  } 
                })
                .catch((error) => {
                  console.error("Error getting document:", error);
                });
    
              
                  
                
          }
          fetchData();    
          
      }, []);

    const handleSeats = (text) => {
        // Only allow input of decimal numbers
        if (/^\d*\.?\d*$/.test(text)) {
          const int = parseInt(text, 10);
          if (seats < totalseats){
            setSeats(int);
          }
          
        }
      };
    
    
    
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter the number of seats you'll be using: </Text>
            <TextInput 
            placeholder='1'
            
            value={seats}
            onChangeText={handleSeats}
            keyboardType="decimal-pad"
            style = {styles.input}
            />
            <Text>You'll pay ${seats * price} in total</Text>
            
            
        </View>
        <View>
        <TouchableOpacity
            onPress={() => navigation.navigate('Rides')}
            
            style ={[styles.button, styles.buttonOutline]}>
                <Text style={[styles.button, styles.buttonOutlineText]}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleUpdate}
            style ={styles.button}
            >
                <Text style={[styles.button, styles.buttonText]}>Join</Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
  )
}

export default JoinARide

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