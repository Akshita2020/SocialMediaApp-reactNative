import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import colors from '../../constants/colors/colors';
import {getFontFamily} from '../../assets/fonts/helper';

const styles = StyleSheet.create({
  profileImage: {
    width: horizontalScale(110),
    height: horizontalScale(110),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderRadius: horizontalScale(110),
    borderColor: colors.purple,
    padding: horizontalScale(4),
  },
  userName: {
    fontFamily: getFontFamily('Inter_18pt', '700'),
    fontSize: scaleFontSize(20),
    marginTop: verticalScale(20),
    textAlign: 'center',
  },
  statAmount: {
    fontFamily: getFontFamily('Inter_18pt', '700'),
    fontSize: scaleFontSize(20),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontFamily: getFontFamily('Inter_18pt', '500'),
    fontSize: scaleFontSize(16),
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    color: '#E9EFF1',
  },
  statBorder: {
    borderRightWidth: 1,
    color: '#E9EFF1',
  },
});

export default styles;
