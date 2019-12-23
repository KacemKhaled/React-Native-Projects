import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
const ItemInput = props => {
    const [enteredItem, setEnteredItem] = useState('');

    const itemInputHandler = (enteredText) => {
        setEnteredItem(enteredText);
    };

    const addItemHandler = () => {
        props.onAddTodoItem(enteredItem);
        setEnteredItem('');
    };


    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer} >
                <TextInput
                    placeholder="TODO item"
                    style={styles.input}
                    onChangeText={itemInputHandler}
                    value={enteredItem}
                />

                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addItemHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        //flexDirection: 'row', //default is column
        flex: 1, //to take as much space as its parent element gives it, otherwise if we don't add it it will take as much space as the child element do
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '40%' //of the parentn
    },
    buttonsContainer: {
        flexDirection: 'row', //default is column
        justifyContent: 'space-around',
        width: '60%'
    },
    input: {
        width: '80%',
        color: 'black',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
});

export default ItemInput;