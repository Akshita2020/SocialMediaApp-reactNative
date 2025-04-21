import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface TitleProp {
  text: string;
}

const Title = ({text}: TitleProp) => {
  return <Text style={styles.title}> {text}</Text>;
};

export default Title;
