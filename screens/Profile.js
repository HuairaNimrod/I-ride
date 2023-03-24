import React, {useState, useEffect} from 'react'
import { View} from 'react-native';
import {db} from '../config'
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs, where, query } from "firebase/firestore"; 
import {getAuth, currentUser, signOut, onAuthStateChanged} from "firebase/auth";
import Fetch from '../src/fetchUserInfo';



function Profile() {
  const [userInfo, setUserInfo] = useState('')
  const auth = getAuth();
  const navigation = useNavigation();
  const user = auth.currentUser?.uid;
  
 

  return (
    <View style={{ flex: 1,  alignItems: 'center'}}> 
      <Fetch />
    </View>
  );
}

export default Profile;




