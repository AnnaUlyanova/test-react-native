import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Dog from './components/Dog'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dog />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
