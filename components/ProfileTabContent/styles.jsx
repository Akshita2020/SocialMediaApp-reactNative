import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  profileTabContentConatiner: {
    backgroundColor: '#FFFFFF',
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  image: {
    width: horizontalScale(150),
    height: verticalScale(90),
    marginTop: verticalScale(11),
  },
});

export default styles;
