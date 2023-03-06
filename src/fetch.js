import React, {useState, useEffect} from 'react'
import { View, Text, Pressable, FlatList } from 'react-native'
import {firebase} from '../config';


const Fetch = () =>{

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('user');

  useEffect( async () => {
    todoRef
    .onSnapshot(
      querySnapshot =>{
        const users = []
        querySnapshot.forEach((doc)=>{
          const {driver, email, firstName, lastName, rider, username} = doc.data()
          users.push({
            id: doc.id,
            driver,
            email,
            firstName,
            lastName,
            rider,
            username,
          })
        })
        setUsers(users)
      }
    )
  }, [])

  return(
    <View style = {{ flex:1, margintTop:100}}>
          <FlatList
              data={users}
              numColumns = {1}
              renderItem={({item})=> (
               
                <View>
                    <Text>{item.driver}</Text>
                    <Text>{item.email}</Text>
                    <Text>{item.firstName}</Text>
                    <Text>{item.lastName}</Text>
                    <Text>{item.rider}</Text>
                    <Text>{item.username}</Text>
                </View>
             
              )}

          />
             


    </View>
  )


}

export default Fetch;



