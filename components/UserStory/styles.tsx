import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors/colors';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  storyConatiner: {
    marginRight: 20,
  },
  firstName: {
    fontFamily: getFontFamily('Inter_18pt', '500'),
    fontSize: 14,
    color: colors.darkBlue,
    marginTop: 8,
    textAlign: 'center',
  },
  
});

export default style;
