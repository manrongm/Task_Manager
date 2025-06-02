import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Platform,
  Alert,
  ToastAndroid,
} from 'react-native';
import TaskItem from './components/TaskItem';

export default function App() {
  // State for new task title and description
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [tasks, setTasks] = useState([]); // State to hold all tasks

  // Show toast or alert based on platform
  const showToast = (msg) => {
    Platform.OS === 'android'
      ? ToastAndroid.show(msg, ToastAndroid.SHORT)
      : Alert.alert(msg);
  };

  // Add a new task to the list
  const handleAddTask = () => {
    // Show alert if user click "+" without entering anything
    if (taskTitle.trim() === ''){
      showToast('Please enter a task title.');
      return;
    }
    
    // Task Schema
    const newTask = {
      id: Date.now().toString(),
      title: taskTitle,
      description: taskDesc,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskDesc('');
    Keyboard.dismiss();
  };

  // Toggle task completed status
  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Task Manager</Text>

      {/* Input area */}
      <View style={styles.inputSection}>
        <TextInput
          placeholder="Task title"
          value={taskTitle}
          onChangeText={setTaskTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Description (optional)"
          value={taskDesc}
          onChangeText={setTaskDesc}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>＋</Text>
        </TouchableOpacity>
      </View>

      {/* Task list */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No tasks yet!</Text>}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'sans-serif-medium',
    }),
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputSection: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'sans-serif',
    }),
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 999,
    alignSelf: 'center',
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  empty: {
    textAlign: 'center',
    marginTop: 50,
    color: '#999',
    fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'sans-serif-light',
    }),
  },
})
