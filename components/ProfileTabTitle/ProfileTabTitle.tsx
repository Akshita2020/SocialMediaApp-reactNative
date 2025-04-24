import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface ProfileTabTitleProps {
  title: string;
  isFocused: Boolean;
}

const ProfileTabTitle = ({title, isFocused}: ProfileTabTitleProps) => {
  return (
    <View>
      <Text style={[styles.title, !isFocused && styles.titleNotFocused]}>
        {title}{' '}
      </Text>
    </View>
  );
};

export default ProfileTabTitle;
