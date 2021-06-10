import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';

import styles from './component/styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


