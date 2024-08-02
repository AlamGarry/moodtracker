import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MoodPicker from '../components/MoodPicker';

export default function Home() {
  return (
    <View style={styles.container}>
      <MoodPicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
