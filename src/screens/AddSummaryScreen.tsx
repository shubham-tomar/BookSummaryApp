import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddSummaryScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic
    console.log({ title, summary });
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Summary"
        value={summary}
        onChangeText={setSummary}
      />
      <Button title="Add Summary" onPress={handleSubmit} />
    </View>
  );
};

export default AddSummaryScreen;
