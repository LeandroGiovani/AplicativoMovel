import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    email: '',
    height: '',
    weight: '',
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { fullName, birthDate, email, height, weight } = formData;

    if (!fullName || !birthDate || !email || !height || !weight) {
      alert('Erro, todos os campos são obrigatórios.');
      return;
    } else {
      alert('Cadastro feito com sucesso!\nUsuário: ' + fullName + 
            '\nData de nascimento: ' + birthDate + 
            '\nEmail: ' + email +
            '\nAltura: ' + height +
            '\nPeso: ' + weight
      );
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulário de Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={formData.fullName}
        onChangeText={(value) => handleChange('fullName', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento (DD/MM/AAAA)"
        value={formData.birthDate}
        onChangeText={(value) => handleChange('birthDate', value)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (em cm)"
        value={formData.height}
        onChangeText={(value) => handleChange('height', value)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Peso (em kg)"
        value={formData.weight}
        onChangeText={(value) => handleChange('weight', value)}
        keyboardType="numeric"
      />

      <Button title="Cadastrar" onPress={handleSubmit} color="#007BFF" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});