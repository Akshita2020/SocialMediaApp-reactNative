/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';

function App() {
  return (
    <View>
      <Text
        style={{fontSize: 50, fontFamily: getFontFamily('Inter_18pt', '100')}}>
        "Hello, World! Welcome to our social media app"
      </Text>
    </View>
  );
}

export default App;
