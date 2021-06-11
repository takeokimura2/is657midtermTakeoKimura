import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function mainBox({children}) {
  return (
    <View style={styles.mainBoxStyle}>{children}</View>
  )
}
