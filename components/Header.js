import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Booking App</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    borderWidth:1,
    backgroundColor: 'lightblue',
    padding: 20,
    alignItems: 'center',
    marginTop:50,
    marginLeft:10,
    marginRight:10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default Header;