import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Text} from 'react-native';


const RequestRide = () => {
  const [from, onChangeFrom] = React.useState('');
  const [to, onChangeTo] = React.useState('');
  const [time, onChangeTime] = React.useState('');
  const [notes, onChangeNotes] = React.useState('');
 



  return (
    <SafeAreaView>
      <Text style={styles.title}>
          REQUEST RIDE PAGE
        </Text>
      <Text style={styles.title}>
          From
        </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFrom}
        value={from}
        placeholder="initial point"
        keyboardType="string"
      />
       <Text style={styles.title}>
          To
        </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTo}
        value={to}
        placeholder="end point"
        keyboardType="string"
      />
      <Text style={styles.title}>
          Time of the trip
        </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTime}
        value={time}
        placeholder="14:25"
        keyboardType="numeric"
      />
      <Text style={styles.title}>
          Notes
        </Text>
      <TextInput
        style={styles.notes}
        onChangeText={onChangeNotes}
        value={notes}
        placeholder="Include details to help the driver to make of your trip a great experience "
        keyboardType="string"
      />
  
      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
  },
  notes: {
    height: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default RequestRide;