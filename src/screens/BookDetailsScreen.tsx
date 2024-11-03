import React from 'react';
import { View, Text } from 'react-native';
import { BookDetailsScreenNavigationProp, Book } from '../types/react-navigation';

type Props = {
  route: {
    params: {
      book: Book;
    };
  };
};

const BookDetailsScreen: React.FC<Props> = ({ route }) => {
  const { book } = route.params;

  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.summary}</Text>
    </View>
  );
};

export default BookDetailsScreen;
