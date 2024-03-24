import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
const BookingForm = ({ handleFormSubmit, selectedTime }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    if (!name || !email || !selectedTime) {
      alert('Please fill in all fields');
      return;
    }
    handleFormSubmit(name, email, selectedTime); // Remove the extra string concatenation
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Appointment</Text>
      {selectedTime && (
        <Text style={styles.selectedTime}>Selected Slot: {selectedTime}</Text> // Provide a proper label for the selected time
      )}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Book" onPress={handleSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  selectedTime: {
    fontSize: 16,
    marginBottom: 10,
  },
});
export default BookingForm;