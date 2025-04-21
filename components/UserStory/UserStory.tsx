import React from 'react';
import {Image, Text, View} from 'react-native';
import {ImageSourcePropType} from 'react-native';
import style from './styles';

interface UserStoryProps {
  firstName: string;
  profileImage: ImageSourcePropType;
}

const UserStory = ({firstName, profileImage}: UserStoryProps) => {
  return (
    <View style={style.storyConatiner}>
      <View style={style.userImageConatiner}>
        <Image
          source={profileImage}
          style={style.image}
        />
      </View>
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
