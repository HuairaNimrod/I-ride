import React, {useState, useEffect} from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {db} from '../config'
import { useNavigation } from '@react-navigation/native';
import {getAuth, currentUser, signOut, onAuthStateChanged} from "firebase/auth";
import Fetch from '../src/fetchUserInfo';



function Profile() {
  const [userInfo, setUserInfo] = useState('')
  const auth = getAuth();
  const navigation = useNavigation();
  const user = auth.currentUser?.uid;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {navigation.navigate("Login")})
      .catch(error => alert(error.message))
    
  }
 

  return (
    <SafeAreaView style={{ flex: 1,  alignItems: 'center'}}> 
      <Fetch />
      <TouchableOpacity
        style ={[styles.button, styles.bottomItem]}
        onPress = {handleSignOut}
        >
          <Text style={[styles.button, styles.buttonText]}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Profile;


const styles = StyleSheet.create({
  container : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
  }, 
  buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
  },
  button : {
      backgroundColor: '#0702F9',
      width: '50%',
      padding: 5,
      margin: 5,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      
  },
  
  buttonText: {
      color: 'white',
      fontSize: 16,
  },
  text : {
    padding: 10,
  },
  bottomItem: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
})

