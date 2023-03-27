import React from 'react';
import { View, Text } from 'react-native';
import FetchRides from '../src/fetchRideInfo';

function Rides() {
  return (
    <View>
      <FetchRides/>
    </View>
  );
}

export default Rides;
