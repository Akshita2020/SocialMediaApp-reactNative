import React from 'react';
import {Text, View} from 'react-native';
import style from './styles';
import {ImageSourcePropType} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {horizontalScale} from '../../assets/styles/scaling';

interface UserStoryProps {
  firstName: string;
  profileImage: ImageSourcePropType;
}

const UserStory = ({firstName, profileImage}: UserStoryProps) => {
  return (
    <View style={style.storyConatiner}>
      <UserProfileImage
        profileImage={profileImage}
        imageDimensions={horizontalScale(65)}
      />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
