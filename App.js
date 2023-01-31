import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Text, Pressable} from 'react-native';


const RequestRide = (props) => {
  const [from, onChangeFrom] = React.useState('');
  const [to, onChangeTo] = React.useState('');
  const [time, onChangeTime] = React.useState('');
  const [notes, onChangeNotes] = React.useState('');
  const onPress = props;



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
  
      <Pressable 
        style={styles.button} 
        onPress={onPress}>
       <Text style={styles.text}>Save</Text>
      </Pressable>

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
    color:'#1853AB',
  },
  notes: {
    height: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    marginTop: 40,
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#1853AB',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
  },
});

export default RequestRide;