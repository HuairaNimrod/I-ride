import React from 'react';
import { View, Text, Pressable } from 'react-native';
import firebase from 'firebase/app';



function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'left' }}>
    
      <Text>Screen 1</Text>
      <Text>Personal Information</Text>
      <Text>Max Olivier</Text>
      <Text>Olivier@byui.edu</Text>
      <Text>3809087909</Text>
    </View>
  );
}

export default Profile;
