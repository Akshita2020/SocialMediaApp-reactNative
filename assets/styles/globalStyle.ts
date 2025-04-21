import {StyleSheet} from 'react-native';
import colors from '../../constants/colors/colors';
import {getFontFamily} from '../fonts/helper';

const globalaStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: colors.lightWhite,
    borderRadius: 8,
  },
  messageNumberConatiner: {
    backgroundColor: colors.pink,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems:'center',
    width:10,
    height: 10,
    borderRadius: 10,
    position:'absolute',
    right:10,
    top:12,
  },
  messageNumber: {
    color: colors.white,
    fontSize: 6,
    fontFamily: getFontFamily('Inter', 600),
  },
});

export default globalaStyle;
