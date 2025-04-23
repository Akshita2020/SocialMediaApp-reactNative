import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors/colors';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyConatiner: {
    marginRight: horizontalScale(20),
  },
  firstName: {
    fontFamily: getFontFamily('Inter_18pt', '500'),
    fontSize: scaleFontSize(14),
    color: colors.darkBlue,
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
});

export default style;
