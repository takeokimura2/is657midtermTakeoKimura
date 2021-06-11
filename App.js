import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';

import styles from './component/styles'
import MainBox from './component/mainBox'
import ExamBox from './component/examBox'
import Compare from './component/comparison'

export default function App() {
  return (
    <View style={styles.container}>
      <MainBox>
        <ExamBox />
        <Compare />
      </MainBox>
    </View>
  );
}


