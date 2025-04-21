/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import colors from './constants/colors/colors';
import {Text} from 'react-native';
import UserStory from './components/UserStory/UserStory';
function App() {
  const userStories = [
    {
      id: 1,
      firstName: 'akshita',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 2,
      firstName: 'akshat',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 3,
      firstName: 'ankita',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 4,
      firstName: 'ankit',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 5,
      firstName: 'anjali',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 6,
      firstName: 'deep',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 7,
      firstName: 'Bhavi',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 8,
      firstName: 'Bhavesh',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 9,
      firstName: 'shiv',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 10,
      firstName: 'parvati',
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
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
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryConatiner}>
        <FlatList
          data={userStories}
          horizontal
          showsHorizontalScrollIndicator = {false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        /> 
      </View>
    </View>
  );
}

export default App;
