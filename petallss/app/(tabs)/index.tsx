import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import UniImage from '../../assets/images/BZU-Multan.png'; // adjust path based on your file

export default function AdmissionForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [admissions, setAdmissions] = useState([]);

  const handleSubmit = () => {
    if (firstName && lastName && age) {
      setAdmissions([
        ...admissions,
        { firstName, lastName, age, key: Date.now().toString() }
      ]);
      setFirstName('');
      setLastName('');
      setAge('');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* University Image at the top */}
      <Image
  source={UniImage}
  style={styles.image}
  resizeMode="contain"
/>

      <Text style={styles.heading}>Admission Form</Text>

      {/* Form Inputs */}
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Apply" onPress={handleSubmit} />

      {/* Submitted Data */}
      <Text style={styles.subHeading}>Submitted Data:</Text>
      <FlatList
        data={admissions}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.firstName} {item.lastName}, Age: {item.age}
          </Text>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f0f4f7',
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  item: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#e3e3e3',
    marginBottom: 8,
    borderRadius: 6,
  },
});