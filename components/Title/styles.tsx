import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import colors from '../../constants/colors/colors';
import {scaleFontSize} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(24),
    fontFamily: getFontFamily('Inter_18pt', '600'),
    color: colors.blue,
  },
});

export default styles;
