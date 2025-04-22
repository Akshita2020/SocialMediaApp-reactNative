import {StyleSheet} from 'react-native';
import colors from '../../constants/colors/colors';
import {getFontFamily} from '../../assets/fonts/helper';

const styles = StyleSheet.create({
  userConatiner: {flexDirection: 'row'},
  userTextContainer: {justifyContent: 'center', marginLeft: 10},
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: colors.black,
    fontFamily: getFontFamily('Inter_18pt', 700),
    fontSize: 16,
  },
  location: {
    color: colors.lightBlack,
    fontFamily: getFontFamily('Inter_18pt', 400),
    fontSize: 12,
    marginTop: 5,
    // marginLeft:-4,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userPostConatiner: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  userPostStats: {marginLeft: 10, flexDirection: 'row'},
  userPostHeartButton: {flexDirection: 'row', marginLeft: 27},
  userLikeButton: {marginLeft: 3, color: '#79869F'},
  userMessageButton: {flexDirection: 'row', marginLeft: 27},
  userCommentButton: {marginLeft: 3, color: '#79869F'},
  userBookMarkButton: {flexDirection: 'row', marginLeft: 27},
  userBookmarkTextButton: {marginLeft: 3, color: '#79869F'},
});

export default styles;
