// AddTask.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (text) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar nova tarefa..."
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <Icon name="add-circle" size={36} color="#64DD17" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 0, // sem borda
    borderRadius: 4,
    marginRight: 8, // distancia do botao de +
    paddingLeft: 8, // distancia entre o placeholder e a margem esquerda da caixa
    backgroundColor: '#fff'
  },
});

export default AddTask;
