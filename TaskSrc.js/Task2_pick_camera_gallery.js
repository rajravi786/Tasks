import React, { useState, useEffect } from 'react';
import { Text, Button, Image, View, Platform  ,TouchableOpacity ,StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Cmarapiker from './Cmarapiker';
import styles from 'react-native-otp-form/src/Otp/styles';

export default function Task2_pick_camera_gallery() {
    const [image, setImage] = useState(null);
   

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });



    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
      <View>
   
<Text style={Styles.titile}>Uplode Prescription</Text>

<Text  style={Styles.Subtitile}>Choose an option to Upload Prescription</Text>

<View style={Styles.PIKER}>
<TouchableOpacity  onPress={pickImage} >
<Text style={Styles.Text}>Gallery</Text>
</TouchableOpacity>
</View>


<Cmarapiker/>



  </View>



  
  )
}

 const Styles = StyleSheet.create({
    PIKER:{

        width:90,
        height:70,
        borderWidth:1,
        borderColor:'black',
        margin:40,
        marginTop:40
        
    },
    Text:{
        textAlign:'center',
        margin:15,
        fontWeight:'bold',
        fontSize:15
    },
    titile:{
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        margin:30
    },
    Subtitile:{
        fontSize:18,
        textAlign:'center',
        fontWeight:'600',
        margin:30
    },
    PIKER :{
        width:90,
        height:70,
        borderWidth:1,
        borderColor:'black',
        margin:40,
        marginTop:40
    }
    
 })