import { Text, View ,TextInput,Button, StyleSheet ,TouchableOpacity ,SafeAreaView} from 'react-native'
import React, { Component } from 'react'

import PlanSrc from './PlanSrc'



export default class AddSrc extends Component {
    constructor(props){
        super(props);
        

     
    }

    state = {
        items :([]),
        text:''

    }
    handleChange = e => {
        this.setState({text: e.target.value})
    }



    handleAdd = e =>{
        if (this.state.text !== "") {
            const items = [...this.state.items, this.state.text];
            this.setState({items:items, text:""});
        
        }
    }

    handleDelete = id =>{
        console.log("Deleted" , id);
        const  Olditems = [...this.state.items]
        console.log("olditems" ,Olditems);
        const items = Olditems.filter((element ,i) => {
            return i !== id
        })
        console.log("newitem" , items)
        this.setState({items: items});
    }


  render() {
    return (

    <SafeAreaView style={Styles.SafeAreaView}>
        
      <View >
        
<Text style={Styles.title}>TO DO List</Text>

<View>
 <TextInput
 style={Styles.TextInput}
 placeholder='todo text'
 value={this.state.text}
 onChange={this.handleChange}
 />
</View>


<View style={Styles.Button}>
<Button
onPress={this.handleAdd}
 title='ADD'
/>
</View>


{

this.state.items.map((value,i) =>{
return <PlanSrc key={i}  id={i}  value={value}
sendData={this.handleDelete}
/>

})

}







{console.log(this.state.items)}

      </View>
      </SafeAreaView>
    )
  }
}

const Styles = StyleSheet.create({
    TextInput:{
        borderWidth:2,
        height:50,
        width:300,
        marginTop:20
        


    },
    Button:{
        height:50,
        width:300,
        marginTop:20,
        
        
    },
    title:{
        alignSelf:'center',
        fontSize:30,
        
    },
    SafeAreaView:{
        padding:30,
        marginTop:30
    }

})

