import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable, FlatList, Button, Alert, Array } from 'react-native'
import {firebase} from '../config';


const FetchRides = () =>{

  const [trip, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('trip');

  useEffect(() => {
    async function fetchData(){
            todoRef
            .onSnapshot(
              querySnapshot =>{
                const ride = []
                querySnapshot.forEach((doc)=>{
                  const { startingpoint, destination, rideType, price, seats, seatAvailable} = doc.data()
                  ride.push({
                    id: doc.id,
                    startingpoint,
                    destination,
                    price,
                    rideType, 
                    
                  })
                })
                setUsers(ride)
              }
            )
      }
      fetchData();      
  }, []);

  return(
    <View style={styles.container}>
          <FlatList
              // style={styles.list}
              data={trip}
              renderItem={({item})=> (
                <View style={[ item.rideType == 'offered'
                                  ? styles.list
                                  : styles.listResquested
                            ]}> 
                    <Text style={styles.title}>Route </Text>
                    <Text style={styles.info}>{item.startingpoint} - {item.destination}</Text>
                    <Text style={styles.title}>Price </Text>
                    <Text style={styles.info}>{item.price}</Text>

                    {/* <Text style={styles.title}>Date </Text>

                    <Text style={styles.title}>Time </Text> */}
                    {/* https://coolors.co/ca2e55-8a6552-462521-bdb246-b8bfcd */}
                </View>
             
              )}

          />
    </View>
  )


}

export default FetchRides;


const styles = StyleSheet.create({
 container:{
    alignItems: 'center',
    flexDirection: 'row',//allows to cover all the width of the
    paddingTop: 20
 },
 list:{
  backgroundColor: 'rgba(215, 219, 228, 1.0)',
  padding: 10,
  margin: 10,
  borderRadius: 15,
  borderWidth:1,
  borderColor: '#1853AB'
 },
 listResquested:{
  backgroundColor: 'rgba(255, 93, 133, 1.0)',
  padding: 10,
  margin: 10,
  borderRadius: 15,
  borderWidth:1,
  borderColor: '#1853AB'
 },
  info:{
    fontWeight: 'normal',
    paddingLeft:15,
    paddingBottom: 5,
    color:'#1853AB',
  },
  title:{
    fontSize: 15,
    fontWeight: 'bold',
    color:'#1853AB',    
    paddingLeft:15,
    paddingTop: 15,
    paddingBottom: 5,
  }
  
  
})
