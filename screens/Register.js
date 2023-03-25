import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {db} from '../config'
import { doc, setDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification,  onAuthStateChanged} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
   

    const navigation = useNavigation()
    useEffect(() =>{
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const uid = user.uid;
            //
          } });
        return unSubscribe

    }, [])
    const handleAddUser = async (uid) => {
     
      await setDoc(doc(db, "user", uid), {
        firstName,
        lastName,
        username,
        phone,
        email,
        password
      });
  
    
      
          }
    
    const handleSignUp = async () => {
        if (firstName.trim() === '' || lastName.trim() === '' || username.trim() === '' || phone.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please complete all fields');
        return;
        }
        if (password.trim() != confirmPassword) {
          alert('Please check that your passwords are matching');
          return;
          }
        if (!email.endsWith('@byui.edu')) {
            alert('Please make sure that you are using your school email account');
            return;
          }
        alert('A verification email has been sent to your email address. It may take a few minutes. Please verify your email before logging in.');
          
        const auth = getAuth();
        
        
        
        const userCredential = createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const uid = user.uid;
            
           handleAddUser(uid);
           navigation.navigate('Login')
           //userCredential.user.sendEmailVerification();
           
          
          
          
  
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
          
        
        
            }
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder='First Name' 
            //value={ }
            onChangeText = {text => setFirstName(text)}
            style = {styles.input}
            />
            <TextInput 
            placeholder='Last Name' 
            //value={ }
            onChangeText = {text => setLastName(text)}
            style = {styles.input}
            />
            <TextInput 
            placeholder='Username' 
            //value={ }
            onChangeText = {text => setUsername(text)}
            style = {styles.input}
            />
            <TextInput 
            placeholder='Phone Number' 
            //value={ }
            onChangeText = {text => setPhone(text)}
            style = {styles.input}
            />
            <TextInput 
            placeholder='Email' 
            //value={ }
            onChangeText = {text => setEmail(text)}
            style = {styles.input}
            />
            <TextInput 
            placeholder='Password' 
            //value={ }
            onChangeText = {text => setPassword(text)}
            style = {styles.input}
            secureTextEntry
            />
            <TextInput 
            placeholder='Confirm Password' 
            //value={ }
            onChangeText = {text => setConfirmPassword(text)}
            style = {styles.input}
            secureTextEntry
            />
            
            
        </View>
        <View>
            <TouchableOpacity
            onPress = {handleSignUp}
            style ={[styles.button]}>
                <Text style={[styles.button, styles.buttonText]}>Register</Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    inputContainer : {
        width: '80%',

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