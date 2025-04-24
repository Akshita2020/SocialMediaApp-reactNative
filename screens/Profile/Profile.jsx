import React from 'react';
import {SafeAreaView, View, ScrollView, Image, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import UserProfileImage from '../../components/UserProfileImage/UserProfileImage';
import {horizontalScale} from '../../assets/styles/scaling';
import styles from './styles';

const Profile = ({profileImage}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImageContent}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={styles.profileImage}
            />
          </View>
        </View>
        <Text style={styles.userName}>Akshita Tiwari</Text>
        <View style={styles.statContainer}>
          <View>
            <Text style={styles.statAmount}>45</Text>
            <Text style={styles.statType}>Following</Text>
          </View>
          <View style={styles.statBorder} />
          <View>
            <Text style={styles.statAmount}>30M</Text>
            <Text style={styles.statType}>Followers</Text>
          </View>
          <View style={styles.statBorder} />
          <View>
            <Text style={styles.statAmount}>100</Text>
            <Text style={styles.statType}>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
