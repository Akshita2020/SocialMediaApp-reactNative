import React from 'react';
import {View, Text, ImageSourcePropType, Image} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faMessage,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

import styles from './styles';

interface UserPostProps {
  firstName: string;
  lastName: string;
  location?: string;
  likes: number;
  comments: number;
  bookmarks: number;
  image: ImageSourcePropType;
  profileImage: ImageSourcePropType;
}

const UserPost = ({
  firstName,
  lastName,
  location,
  likes,
  comments,
  bookmarks,
  image,
  profileImage,
}: UserPostProps) => {
  return (
    <View style={styles.userPostConatiner}>
      <View style={styles.user}>
        <View style={styles.userConatiner}>
          <UserProfileImage profileImage={profileImage} imageDimensions={48} />

          <View style={styles.userTextContainer}>
            <Text>
              {firstName} {lastName}
            </Text>
            {location && <Text style={styles.location}>{location}</Text>}
          </View>
        </View>

        <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={24} />
      </View>
      <View style={styles.postImage}>
        <Image source={image} />
      </View>
      <View style={styles.userPostStats}>
        <View style={styles.userPostHeartButton}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={styles.userLikeButton}>{likes}</Text>
        </View>
        <View style={styles.userMessageButton}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={styles.userCommentButton}>{comments}</Text>
        </View>
        <View style={styles.userBookMarkButton}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={styles.userBookmarkTextButton}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
