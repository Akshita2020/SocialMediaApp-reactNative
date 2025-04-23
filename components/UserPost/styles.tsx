import {StyleSheet} from 'react-native';
import colors from '../../constants/colors/colors';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  userConatiner: {flexDirection: 'row'},
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: colors.black,
    fontFamily: getFontFamily('Inter_18pt', 700),
    fontSize: scaleFontSize(16),
  },
  location: {
    color: colors.lightBlack,
    fontFamily: getFontFamily('Inter_18pt', 400),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
    // marginLeft:-4,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostConatiner: {
    marginTop: verticalScale(35),
    paddingBottom: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  userPostStats: {marginLeft: horizontalScale(10), flexDirection: 'row'},
  userPostHeartButton: {flexDirection: 'row', marginLeft: horizontalScale(27)},
  userLikeButton: {marginLeft: horizontalScale(3), color: '#79869F'},
  userMessageButton: {flexDirection: 'row', marginLeft: horizontalScale(27)},
  userCommentButton: {marginLeft: horizontalScale(3), color: '#79869F'},
  userBookMarkButton: {flexDirection: 'row', marginLeft: horizontalScale(27)},
  userBookmarkTextButton: {marginLeft: horizontalScale(3), color: '#79869F'},
});

export default styles;
