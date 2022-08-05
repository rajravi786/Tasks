import { View, Text ,SafeAreaView ,StyleSheet ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react';
import RnOtpTimer from 'rn-otp-timer';
import {OTP} from 'react-native-otp-form';



export default function Task1OTPverify() {
  return (
    
<SafeAreaView style={styles.body}>

<Text style={styles.titname}>OTP Verification</Text>

<Text style={styles.lines}>Enter the OTP Code form the phone we just sent you</Text>

<OTP
        codeCount={4}
        containerStyle={{marginTop: 50, }}
        otpStyles={{backgroundColor: '#eee'}}
    />



<View> 
<TouchableOpacity style={styles.contBtn}>
<Text style={styles.conttext}>Continue</Text>
</TouchableOpacity>
</View>


<View>

<Text style={styles.otpcode}>Didn't recive otp code!</Text>
</View>


<RnOtpTimer 
  minutes={0}
  seconds={120}
  resendButtonStyle={styles.button}
  resendButtonTextStyle={styles.buttonText}
  resendButtonAction={() => {
    console.log('otp resent!');
  }}
/>




</SafeAreaView>



  )
}




const styles = StyleSheet.create({
  titname:{
    fontSize:25,
    alignSelf:'center',
    color:'#2ECC71',
    fontWeight:'500',
    margin:10,
    marginTop:40
  },
  button:{
    margin:20,
    height:20,
    width:60,
    backgroundColor:'#2ECC71'
    
  },
  buttonText:{
    color:'black',
    alignSelf:'center'
  },
  lines:{
    textAlign:'center',
    margin:10
  },
  contBtn:{
    marginTop:20,
    backgroundColor:"#2ECC71",
    width:300,
    height:40,
    borderRadius:10,
    alignSelf:'center'
  },
  conttext:{
    color:'#ffff',
    fontSize:18,
    alignSelf:'center',
    margin:5
  },
  otpcode:{
    marginTop:10,
    paddingLeft:20
  },
  body:{
    margin:10,
    alignContent:'space-between'
  }
  

})