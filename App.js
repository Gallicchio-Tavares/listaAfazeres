import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Header } from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import styles from './css/styles';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks((prevTasks) => {
      if (!checkDuplicateTask(prevTasks, text)) {
        return [...prevTasks, { id: Date.now(), text, completed: false }];
      } else {
        Alert.alert(
          'Tarefa duplicada',
          'Esta tarefa já existe. Por favor, escolha um nome diferente.'
        );
        return prevTasks;
      }
    });
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const onEditTask = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const checkDuplicateTask = (tasksArray, newTaskText) => {
    return tasksArray.some((task) => task.text === newTaskText);
  };

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />
      <View style={styles.adicionar}>
        <AddTask onAddTask={addTask} />
      </View>
      <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={onEditTask}
      />
    </View>
  );
};

export default App;