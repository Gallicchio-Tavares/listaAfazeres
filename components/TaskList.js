// TaskList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TaskList = ({ tasks, onToggleTask, onDeleteTask, onEditTask }) => {
  
  const confirmDelete = (taskId) => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir esta tarefa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: () => onDeleteTask(taskId) },
      ],
      { cancelable: false }
    );
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    Alert.prompt(
      'Editar Tarefa',
      'Digite o novo nome da tarefa:',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Salvar',
          onPress: (newText) => onEditTask(taskId, newText),
        },
      ],
      'plain-text',
      taskToEdit.text
    );
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (// o item em si:
        <View style={styles.lista}>
          
          <TouchableOpacity onPress={() => onToggleTask(item.id)}>
            <Icon
              name={item.completed ? 'check-box' : 'check-box-outline-blank'}
              size={24}
              color={item.completed ? '#64DD17' : '#757575'}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 8,
              textDecorationLine: item.completed ? 'line-through' : 'none',
              color: item.completed ? '#757575' : '#000',
            }}
          >
            {item.text}
          </Text>
          <TouchableOpacity onPress={() => editTask(item.id)} style={styles.editar}>
            <Icon name="edit" size={24} color="#757575" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => confirmDelete(item.id)}>
            <Icon name="delete" size={24} color="#757575" />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  lista:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 4,
    marginBottom: 20,
    paddingLeft: 10,
  },
  editar: {
    marginLeft: 10,
    marginRight: 10,
  }
  
})

export default TaskList;
