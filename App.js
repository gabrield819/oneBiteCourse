import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

import Titulo from './src/components/Titulo';
import Main from './src/components/Main';


export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
