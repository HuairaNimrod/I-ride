import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable, FlatList, Button, Alert } from 'react-native'
import {firebase} from '../config'
import { Image } from 'react-native';


const Fetch = () =>{

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('user');

  useEffect(() => {
    async function fetchData(){
            todoRef
            .onSnapshot(
              querySnapshot =>{
                const users = []
                querySnapshot.forEach((doc)=>{
                  const { email, firstName, lastName, username, phoneNumber} = doc.data()
                  users.push({
                    id: doc.id,
                    email,
                    firstName,
                    lastName,
                    username,
                    phoneNumber
                  })
                })
                setUsers(users)
              }
            )
      }
      fetchData();      
  }, []);

  return(
    <View style={styles.container}>
          <FlatList
              data={users}
              renderItem={({item})=> (
                <View> 
                    <Image source={require('../images/sqare.png')} style={styles.circle}/>
                    <Text style={styles.header}>@{item.username}</Text>
                    <Pressable 
                        style={({pressed}) => [ //allows to modify the style in an action (onPress)
                              {
                                backgroundColor: pressed 
                                            ? '#1853AB' 
                                            : 'white',
                              },
                              styles.button,
                            ]}
                        onPress={() => Alert.alert('Edit profile under construction')}>
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
                    <Text style={styles.info}>{item.firstName} {item.lastName}</Text>
                    <Text style={styles.info}>{item.email}</Text>
                    <Text style={styles.info}>{item.phoneNumber}</Text>
                </View>
             
              )}

          />
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
    paddingLeft:15,
    paddingBottom: 5,
    color:'#1853AB',
  }

})
