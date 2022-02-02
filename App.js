import React, {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';

// import components

import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random(100), text: 'Milk'},
    {id: Math.random(100), text: 'Milo'},
    {id: Math.random(100), text: 'Fruit'},
    {id: Math.random(100), text: 'Bread'},
  ]);
  return (
    <View style={styles.container}>
      <Header />
      {/* 29.41 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
