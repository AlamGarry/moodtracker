import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { MoodOptionType } from '../types';

export default function MoodPicker() {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();

  const moodOptions: MoodOptionType[] = [
    { emoji: '🧑‍💻', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
  ];
  return (
    <View style={styles.moodList}>
      {moodOptions.map((option) => (
        <View>
          <Pressable
            onPress={() => setSelectedMood(option)}
            style={[
              styles.moodItem,
              selectedMood?.emoji === option.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}
          >
            <Text key={option.emoji} style={styles.moodText}>
              {option.emoji}
            </Text>
          </Pressable>
          <Text style={styles.descriptionText}>
            {option.emoji === selectedMood?.emoji
              ? option.description
              : undefined}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  moodText: {
    fontSize: 18,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  moodItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  selectedMoodItem: {
    borderColor: '#fff',
    backgroundColor: '#454C73',
    borderWidth: 2,
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
});
