import React from "react";
 import RNPickerSelect from "react-native-picker-select";
 import { StyleSheet, Text, View } from "react-native";
 export default function Task3_Showlist () {
     return (
         <View style={styles.container}>

         
             <Text style ={styles.text} >Today</Text>
             <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "7:00 AM - 10:00 AM", value: "7:00 AM - 10:00 AM" },
                     { label: "7:00 AM - 10:00 AM", value: "7:00 AM - 10:00 AM" },
                     { label: "7:00 AM - 10:00 AM", value: "7:00 AM - 10:00 AM" },
                     
                     ]}/>
             <Text style ={styles.text} >Tommorow</Text>
             <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "7:00 AM - 10:00 AM", value: "7:00 AM - 10:00 AM" },
                     { label: "7:00 AM - 10:00 AM", value: "7:00 AM - 10:00 AM" },
                     { label: "7:00 AM - 10:00 AM", value: "7:00 AM - 10:00 AM" },
                     
                     ]}/>
             <Text style ={styles.text} >10/01/2022</Text>
             <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "7:00 AM - 10:00 AM", value: "7:00 AM - 10:00 AM" },
                     { label: "7:00 AM - 10:00 AM", value: "7:00 AM - 10:00 AM" },
                     { label: "7:00 AM - 10:00 AM", value: "7:00 AM - 10:00 AM" },
                     
                     ]}/>
         </View>
     );
 }
 const styles = StyleSheet.create({
     container : {
         flex            : 1,
         backgroundColor : "#fff",
         alignItems      : "center",
         marginTop:40
     },
     text:{
       fontSize:20,
       alignSelf:'flex-start',
       padding:5,
       fontWeight:'600',
       

     }
 });