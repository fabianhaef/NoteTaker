import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { NoteTakingInput } from './components/NoteTakingInput';

export default function App() {
  const [text, setText] = useState<string>('');

  const saveNote = async () => {
    await AsyncStorage.setItem('note', text)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NoteTakingInput saveNote={saveNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
