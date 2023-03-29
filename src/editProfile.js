import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Pressable, Alert } from 'react-native';
import {db} from '../config'
import { getDoc, doc, updateDoc} from "firebase/firestore"; 
import {getAuth} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';



const Edit = () =>{
  const navigation = useNavigation()
  
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const auth = getAuth();
  async function HandleEditData(){
    const docRef = doc(db, "user", auth.currentUser?.uid);

       
    await updateDoc(docRef, { firstName, lastName, phone, username })
    .then(
        navigation.navigate('ProfilePage')
    )
    
  }
  useEffect(() => {
    async function FetchData(){
          
          const documentRef = doc(db, "user", auth.currentUser?.uid);

          // Use getDoc to retrieve the document data
          getDoc(documentRef)
            .then((docSnapshot) => {
              if (docSnapshot.exists()) {
                // Access the document data using the data() method and set data
                const data = docSnapshot.data();
                setFirstName(data.firstName)
                setLastName(data.lastName)
                setPhone(data.phone)
                setUsername(data.username)
                
              } 
            })
            .catch((error) => {
              console.error("Error getting document:", error);
            });

          
              
            
      }
      FetchData();    
      
  }, []);

  return(
    <View style={styles.container}>
          
      <View style={styles.personal}> 
          <Image source={require('../images/sqare.png')} style={styles.circle}/>
          <Text style={styles.header}>@{username}</Text>
          
         
          <Text style={styles.title}>Edit Personal Information </Text>
          <TextInput 
            placeholder= {username}
            value={username}
            onChangeText = {text => setUsername(text)}
            style = {styles.input}
            />
          <TextInput 
            placeholder= {firstName}
            value={firstName}
            onChangeText = {text => setFirstName(text)}
            style = {styles.input}
            />
            <TextInput 
            placeholder={lastName}
            value={lastName}
            onChangeText = {text => setLastName(text)}
            style = {styles.input}
            />
            <TextInput 
            placeholder={phone}
            value={phone}
            onChangeText = {text => setPhone(text)}
            style = {styles.input}
            />
             <TouchableOpacity
            onPress = {HandleEditData}
            style ={[styles.changeButton]}>
                <Text style={[styles.changeButton, styles.changeButtonText]}>Save Changes</Text>
            </TouchableOpacity>
       
      </View>
    
    </View>
  )


}

export default Edit;



const styles = StyleSheet.create({
  container:{
     alignItems: 'center',
     flexDirection: 'row',//allows to cover all the width of the
     paddingTop: 20
  },
   circle:{
     width: 80, 
     height: 80, 
     borderRadius: 80/ 2,
     borderWidth: 1, 
     borderColor:'#1853AB',
     alignSelf: 'center', // center an image
   },
   button:{
     height: 40,
     marginTop: 10,
     width:200,
     borderWidth: 1,
     borderRadius: 10,
     padding: 10,
     borderColor:'#1853AB',
     alignSelf: 'center',
   },
   buttonText:{
     textAlign:'center',
     fontSize:16,
   },
   header:{
     color:'gray',
     textAlign: 'center',
   },
   personal: {
    alignItems: 'center',
    flex: 1,
   },
   
   title:{
     
    fontSize: 15,
    fontWeight: 'bold',
    color:'gray',    
    paddingLeft:15,
    paddingTop: 15,
    paddingBottom: 5,
   },
   info:{
     fontWeight: 'normal',
     textAlign: 'left',
     paddingLeft:15,
     paddingBottom: 5,
     color:'#1853AB',
   },
   input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
    width: '80%',
    marginBottom: 5,
},
changeButton : {
    backgroundColor: '#0702F9',
    width: 200,
    padding: 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
},

changeButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    border: 10,
},
   
 
 })
 
