import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './styles'

export default function comparison() {

  const [firstnumber, setFirstNumber] = useState(0);
  const [secondnumber, setSecondNumber] = useState(0);
  const [errormessage, setErrorMessage] = useState("")
  const [successmessage, setSuccessMessage] = useState("")

  function display(){
    console.log(firstnumber);
    console.log(secondnumber);

    if(Number(firstnumber)<1 || Number(firstnumber) >100 || isNaN(firstnumber)){
      setErrorMessage("Invalid input, please try again.")
    }
    else if(Number(secondnumber)<1 || Number(secondnumber)>100 || isNaN(secondnumber)){
      setErrorMessage("Invalid input, please try again.")
    }
    else if(Number(firstnumber) === Number(secondnumber)){
      setSuccessMessage("Number 1 is equal to Number 2")
    }
    else if(Number(firstnumber) < Number(secondnumber)){
      setSuccessMessage("Number 1 is less than Number 2")
    }
    else {
      setSuccessMessage("Number 1 is bigger than Number 2")
    }
  }

  return (
      <View style = {styles.comparionBox}>
        <Text style={styles.textStyle}>Number 1: </Text>
          <TextInput
          keyboardType="numeric"
          style = {styles.textInput}
          placeholder='e.g. 10'
          onChangeText={(val) => setFirstNumber(val)}
          />
        <Text style={styles.textStyle}>Number 2: </Text>
        <TextInput
          keyboardType="numeric"
          style = {styles.textInput}
          placeholder='e.g. 10'
          onChangeText={(val) => setSecondNumber(val)}
        />
        <Button 
         title="Compare"
         size="sm"
         style = {styles.buttonStyle}
         onPress = {display} 
        />
        <Text style={styles.errorMessage}>{errormessage}</Text>
        <Text style={styles.successMessage}>{successmessage}</Text>
      </View>
    )
  
}
