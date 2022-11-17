import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

import Titulo from './src/components/Titulo';
import Form from './src/components/Forms/Index';


export default function App() {
  return (
    <>
    <StatusBar barStyle={'default'}/>
      <View style={styles.container}>
        <Titulo/>
        <Form/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 8,
  },
});
