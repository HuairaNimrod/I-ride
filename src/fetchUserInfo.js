import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';
import {db} from '../config'
import { getDoc, doc } from "firebase/firestore"; 
import {getAuth} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import Edit from './editProfile';


const Fetch = () =>{

  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const auth = getAuth();
  useEffect(() => {
    async function fetchData(){
          
          const documentRef = doc(db, "user", auth.currentUser?.uid);

          // Use getDoc to retrieve the document data
          getDoc(documentRef)
            .then((docSnapshot) => {
              if (docSnapshot.exists()) {
                // Access the document data using the data() method and set data
                const data = docSnapshot.data();
                setEmail(data.email)
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
      fetchData();    
      
  }, []);

  return(
    <View style={styles.container}>
          
      <View> 
          <Image source={require('../images/sqare.png')} style={styles.circle}/>
          <Text style={styles.header}>@{username}</Text>
          <Pressable 
              style={({pressed}) => [ //allows to modify the style in an action (onPress)
                    {
                      backgroundColor: pressed 
                                  ? '#1853AB' 
                                  : 'white',
                    },
                    styles.button,
                  ]}
              // onPress={() => Alert.alert('Edit profile under construction')}
              onPress = {() => navigation.navigate(Edit)}>

          {({ pressed }) => (
              <Text
                  style={[
                      {
                          color: pressed
                              ? 'white'
                              : '#1853AB'
                      },
                      styles.buttonText,
                  ]}>
                  Edit Profile
              </Text>
      )}
          </Pressable>
         
          <Text style={styles.title}>Personal Information </Text>
          <Text style={styles.info}>{firstName} {lastName}</Text>
          <Text style={styles.info}>{email}</Text>
          <Text style={styles.info}>{phone}</Text>
          
      </View>
    
    </View>
  )


}

export default Fetch;



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
   
 
 })
 
