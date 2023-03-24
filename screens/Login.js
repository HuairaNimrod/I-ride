import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()
    useEffect(() =>{
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const uid = user.uid;
            //navigation.navigate('Navigation')
            
          } });
        return unSubscribe

    }, [])
    const handleLogIn = async () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate('Navigation')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
    
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
        <View style={styles.inputContainer}>
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
            
        </View>
        <View
        style = {styles.buttonContainer}>
            <TouchableOpacity
            style ={styles.button}
            onPress = {handleLogIn}>
                <Text style={[styles.button, styles.buttonText]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {navigation.navigate('Register')}}
            style ={[styles.button, styles.buttonOutline]}>
                <Text style={[styles.button, styles.buttonOutlineText]}>Register</Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
  )
}

export default Login

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
    buttonOutline :{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText : {
        backgroundColor: 'white',
        fontWeight: '700',
        fontSize: 16,
        color: '#0782F9',

    }
    
})