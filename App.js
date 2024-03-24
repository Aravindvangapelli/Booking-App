import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Header from './components/Header';
import TimeSlotList from './components/TimeSlotList';
import BookingForm from './components/BookingForm';
const App = () => {
  const [timeSlots, setTimeSlots] = useState([
    { id: 1, time: '09:00 AM', date: '2024-03-23', available: true },
    { id: 2, time: '10:00 AM', date: '2024-03-23', available: true },
    { id: 3, time: '11:00 AM', date: '2024-03-23', available: true },
    { id: 4, time: '12:00 PM', date: '2024-03-23', available: true },
    { id: 5, time: '01:00 PM', date: '2024-03-23', available: true },
    { id: 6, time: '02:00 PM', date: '2024-03-23', available: true },
    { id: 7, time: '03:00 PM', date: '2024-03-23', available: true },
    { id: 8, time: '04:00 PM', date: '2024-03-23', available: true },
    { id: 9, time: '05:00 PM', date: '2024-03-23', available: true },
  ]);
  const [selectedTime, setSelectedTime] = useState(null);
  const handleTimeSlotPress = (selectedTimeSlot) => {
    setSelectedTime(selectedTimeSlot.time);
  };
  const handleFormSubmit = (name, email) =>{
    if (!selectedTime) {
      Alert.alert('Please select a time slot');
      return;
    }
    const selectedSlot = timeSlots.find(slot => slot.time === selectedTime);
    if (!selectedSlot.available) {
      Alert.alert('Selected time slot is not available');
      return;
    }
    Alert.alert('Booking confirmed', `You have successfully booked a slot for ${selectedTime}.\nName: ${name}\nEmail: ${email}`);
    setSelectedTime(null);
  };
  return (
    <View style={styles.container}>
      <Header />
      <TimeSlotList timeSlots={timeSlots} handleTimeSlotPress={handleTimeSlotPress} />
      <BookingForm handleFormSubmit={handleFormSubmit} selectedTime={selectedTime} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});
export default App;