import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import {FIREBASE_AUTH} from "../FirebaseConfig";
const TaskScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: taskText, description: taskDescription, completed: false }]);
      setTaskText('');
      setTaskDescription('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    
    <View >
      <Text style={{fontSize:30,marginBottom:20,alignContent:'center',textAlign:'center',fontWeight:'bold'}}>Title:</Text>
      <TextInput  style={{borderWidth:1,borderColor:'black',borderRadius:5,padding:10,marginHorizontal:20,marginVertical:20}}
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
        placeholder="Enter a task title"
      />
      <Text style={{fontSize:30,marginBottom:20,fontWeight:'bold',alignContent:'center',textAlign:'center'}}>Description:</Text>
      <TextInput   style={{borderWidth:1,borderColor:'black',borderRadius:5,padding:10,marginHorizontal:20,marginVertical:20}}
        value={taskDescription}
        onChangeText={(text) => setTaskDescription(text)}
        placeholder="Enter a task description"
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderColor: 'black',
                  borderWidth: 1,
                  marginRight: 10,
                  backgroundColor: item.completed ? 'green' : 'transparent',
                }}
              />
            </TouchableOpacity>
            <Text style={{ flex: 2 }}>Title:{item.title} {'\n'}Description:{item.description}</Text>
           
            <Button title="Delete" onPress={() => removeTask(item.id)} />
            
          </View>
        )}
      />
      <View><Button style={{marginTop:80}} onPress={()=>FIREBASE_AUTH.signOut()} title="Logout"/></View>
    </View>
  );
};

export default TaskScreen;
