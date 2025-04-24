import React from 'react';

import {ScrollView, Image, View} from 'react-native';
import styles from './styles';

const ProfileTabContent = () => {
  return (
    <ScrollView
      style={styles.profileTabContentConatiner}
      showsVerticalScrollIndicator={false}>
      <View style={styles.profileTabContent}>
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
