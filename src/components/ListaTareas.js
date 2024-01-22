import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

const TaskList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now().toString(), name: task }]);
      setTask('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "black" }}>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 3, padding: 8, backgroundColor: "white" }}
          placeholder="Ingrese la tarea"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Icon
          name="add"
          type="material"
          size={40}
          color="green"
          onPress={addTask}
        />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem containerStyle={{ backgroundColor: 'transparent', borderBottomColor: 'white', borderBottomWidth: 1, marginBottom: 8 }}>
            <ListItem.Content>
              <ListItem.Title style={{ color: 'white' }}>{item.name}</ListItem.Title>
            </ListItem.Content>
            <Icon
              name="delete"
              type="material"
              iconStyle={{ color: 'red' }}
              onPress={() => removeTask(item.id)}
            />
          </ListItem>
        )}
      />

    </View>
  );
};

export default TaskList;
