import React from 'react';
import { View, Text, Button, FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { HomeScreenNavigationProp, Book } from '../types/react-navigation';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const data: Book[] = [
    { id: '1', title: 'Book 1', summary: 'Summary of Book 1' },
    { id: '2', title: 'Book 2', summary: 'Summary of Book 2' },
  ];

  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <View style={styles.bookItem}>
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Button
        title="View Summary"
        onPress={() => navigation.navigate('BookDetails', { book: item })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  bookItem: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default HomeScreen;
