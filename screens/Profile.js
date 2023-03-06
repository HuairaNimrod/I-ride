import React from 'react';
import { View } from 'react-native';
import Fetch from '../src/fetch';



function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'left' }}> 
      <Fetch/>
    </View>
  );
}

export default Profile;




