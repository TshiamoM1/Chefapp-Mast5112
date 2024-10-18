import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';

// Define the type for a menu item
type MenuItem = {
  name: string;
  description: string;
  course: string;
  price: string;
};

// Define the type for the route parameters
type RouteParams = {
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

const AddMenuItemScreen = () => {
  const route = useRoute();
  const { setMenuItems } = route.params as RouteParams;  // Explicitly cast params type

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters'); // Default to "Starters"
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    const newItem: MenuItem = { name, description, course, price };
    setMenuItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      {/* Picker for selecting the course */}
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={addMenuItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
});

export default AddMenuItemScreen;
