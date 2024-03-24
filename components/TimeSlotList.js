import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
const TimeSlotList = ({ timeSlots, handleTimeSlotPress }) => {
  const renderTimeSlotButton = (item) => (
    <Button
      key={item.id}
      title={item.time}
      onPress={() => handleTimeSlotPress(item)}
      disabled={!item.available}
      color={item.available ? 'light-blue' : 'gray'}
      style={styles.timeSlotButton}
    />
  );
  const renderTimeSlotRow = (row) => (
    <View key={row[0].id} style={styles.timeSlotRow}>
      {row.map(renderTimeSlotButton)}
    </View>
  );
  const rows = [];
  for (let i = 0; i < timeSlots.length; i += 3) {
    rows.push(timeSlots.slice(i, i + 3));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Available Time Slots</Text>
      {rows.map(renderTimeSlotRow)}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  timeSlotRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  timeSlotButton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
export default TimeSlotList;