import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function examBox() {
  return (
    <View style={styles.examBoxStyle}>
      <Text style ={styles.titleText}>Midterm Exam</Text>
      <Text style= {styles.subtitle}>Compare two numbers</Text>
    </View>
  )
}
