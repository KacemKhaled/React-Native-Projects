import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import ItemInput from './components/TodoInput';
export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addItemHandler = todoTitle => {
    //console.log(enteredItem);
    setTodoItems(currentItems => [
      ...currentItems,
      { id: Math.random().toString(), value: todoTitle }
    ]);
  };

  const removeItemHandler = itemId => {
    setTodoItems(currentItems => {
      return currentItems.filter((item) => item.id !== itemId);
    });
  };

  return (
    <View style={styles.screen}>
      <ItemInput onAddTodoItem={addItemHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todoItems}
        renderItem={itemData => (
          <TodoItem 
            id={itemData.item.id} 
            onDelete={removeItemHandler} 
            title={itemData.item.value} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
