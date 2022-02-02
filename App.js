import React, {useState} from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';

// import components

import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random(100), text: 'Milk'},
    {id: Math.random(100), text: 'Milo'},
    {id: Math.random(100), text: 'Fruit'},
    {id: Math.random(100), text: 'Bread'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
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
