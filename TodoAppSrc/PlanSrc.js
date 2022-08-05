import { View, Text ,TouchableOpacity , StyleSheet ,Button} from 'react-native'
import React from 'react'
import styles from 'react-native-otp-form/src/Otp/styles'

export default function PlanSrc(props) {
  return (
    <View>
      <Text>{props.value}</Text>

     

      <TouchableOpacity 
      style={styles.button} onPress={() =>{props.sendData(props.id)}}
      ><Text>Delete</Text></TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
    button:{
        height:30,
        width:30,
        backgroundColor:'red'
    }
})