import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const scale = (size: number) => {
  const scaleFactor = width / 375; // Assuming 375 is the base width
  return Math.round(size * scaleFactor);
};

const scaledFontSize = (size: number) => {
  return scale(size);
};
const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelinesBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const horizontalScale = (size: number) =>
  (width / guidelinesBaseWidth()) * size;

const guidelinesBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = (size: number) =>
  (height / guidelinesBaseHeight()) * size;

const guidelinesBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaledFont = (size: number) =>
  Math.round(width / guidelinesBaseFonts()) * size;

export {scaledFontSize, horizontalScale, verticalScale, scaledFont};
