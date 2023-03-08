import React from 'react';
import { View } from 'react-native';
import Fetch from '../src/fetchUserInfo';



function Profile() {
  return (
    <View style={{ flex: 1,  alignItems: 'center'}}> 
      <Fetch/>
    </View>
  );
}

export default Profile;




