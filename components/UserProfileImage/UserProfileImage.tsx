import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {View, Image} from 'react-native';
import styles from './styles';
import {width} from '@fortawesome/free-brands-svg-icons/fa42Group';

interface ImageType {
  profileImage: ImageSourcePropType;
  imageDimensions: number;
}

const UserProfileImage = ({profileImage, imageDimensions}: ImageType) => {
  return (
    <View style={[styles.userImageConatiner,{borderRadius: imageDimensions }]}>
      <Image
        source={profileImage}
        style={{height: imageDimensions, width: imageDimensions}}
      />
    </View>
  );
};

export default UserProfileImage;
