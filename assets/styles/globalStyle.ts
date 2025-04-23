import {StyleSheet} from 'react-native';
import colors from '../../constants/colors/colors';
import {getFontFamily} from '../fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from './scaling';

const globalaStyle = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    backgroundColor: colors.lightWhite,
    borderRadius: horizontalScale(8),
  },
  messageNumberConatiner: {
    backgroundColor: colors.pink,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(12),
  },
  messageNumber: {
    color: colors.white,
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', 600),
  },
  userStoryConatiner: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostConatiner: {
    marginHorizontal: horizontalScale(24),
  },
});

export default globalaStyle;
