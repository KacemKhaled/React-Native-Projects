import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import ItemInput from './components/TodoInput';
export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addItemHandler = todoTitle => {
    //console.log(enteredItem);
    setTodoItems(currentItems => [
      ...currentItems,
      { id: Math.random().toString(), value: todoTitle }
    ]);
    setIsAddMode(false);
  };

  const removeItemHandler = itemId => {
    setTodoItems(currentItems => {
      return currentItems.filter((item) => item.id !== itemId);
    });
  };

  const cancelItemAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Todo Item" onPress={() => setIsAddMode(true)} />
      <ItemInput visible={isAddMode} onAddTodoItem={addItemHandler} onCancel={cancelItemAdditionHandler} />
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
