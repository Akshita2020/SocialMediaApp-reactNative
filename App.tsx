/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import colors from './constants/colors/colors';
import {Text} from 'react-native';
function App() {
  return (
    <View>
      <View style={globalStyle.header}>
        <Title text="Let's explore" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon
            icon={faEnvelope}
            size={20}
            color={colors.lightGrey}
          />
          <View style={globalStyle.messageNumberConatiner}>
            <Text style= {globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
