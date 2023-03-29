import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import FetchRides from '../src/fetchRideInfo';

function Rides() {
  return (
    <SafeAreaView>
      
      <View style={styles.container}>
      <TouchableOpacity>
      <Text style={[styles.rideText, styles.currentPage]}>Rides</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert('My Rides Screen is under construction')}
      >
        <Text style={styles.rideText}>My Rides</Text>
      </TouchableOpacity>
      </View>
     
      <FetchRides/>
     
      
    </SafeAreaView>

  );
}

export default Rides;
const styles = StyleSheet.create({
  container : {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

  },
  rideText: {
    fontWeight: '600',
    color: '#66787A',
    padding: 15,
    fontSize: 16,
  },
  currentPage: {
    textDecorationLine: 'underline',
    color: '#0702F9',
  }

 })