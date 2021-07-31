import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Keyboard } from 'react-native';
import Task from './components/Task'



export default function App() {
  const [task,setTask]=useState()
  const [taskItems,setTaskItem]=useState()

  const handleAddTask=()=>{
    Keyboard.dismiss()
    setTaskItem([...taskItems, task])
    console.log(task)
    setTask(null)
  }
  const completeTask=(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItem(itemsCopy);

  }
  return (
    <View style={styles.container}>
      {/*Today's Tasks*/ }
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
              {/* Tasks*/ 
              taskItems.map((item,index)=>{
               return (
                 <TouchableOpacity onPress={()=>completeTask(index)}>
               <Task key={index} text={item}/>
                </TouchableOpacity>
               )
              })
            }

             {/*
              <Task text={'Task 2'}/>
              <Task text={'Task 3'}/>
             */} 

          </View>

        </View>
          {/*Write a Task*/ }
          <KeyboardAvoidingView
          behavior={Platform.OS==="ios"? "padding":"height"}
          style={styles.writeTaskWrapper}
          >
            <TextInput style={styles.input} placeholder={"Write a Task"} value={task} onChangeText={text=>setTask(text)}/>
            <TouchableOpacity onPress={()=>handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',

  },
  items:{
    marginTop:30,
  },

writeTaskWrapper:{
  position:'absolute',
  bottom:60,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
},
input:{
  paddingVertical:15,
  paddingHorizontal:15,
  width:250,
  backgroundColor: '#fff',
  borderRadius:60,
  borderColor:'#C0C0C0',
  borderWidth:1,
},
addWrapper:{
  borderRadius:60,
  width:60,
  height:60,
  backgroundColor: '#fff',
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#C0C0C0',
  borderWidth:1,
},
addText:{

},
});
