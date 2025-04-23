import {StyleSheet} from 'react-native';
import colors from '../../constants/colors/colors';
import { horizontalScale } from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  userImageConatiner: {
    borderColor: colors.pink,
    borderWidth: 1,
    padding: horizontalScale(3),
  },
});
export default styles;
