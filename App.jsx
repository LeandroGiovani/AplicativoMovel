import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [texto, setTexto] = useState('Texto inicial');

  const exibirTexto = () => {
    if (texto == 'Texto inicial'){
      setTexto('Novo texto');
    } else {
      setTexto('Texto inicial')
    }
  };

  return (
    <View style={styles.container}>
      <Text>{texto}</Text>
      <Button onPress={exibirTexto} title='Press me' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
});
