import React  from 'react';
import { Dimensions, PixelRatio, StatusBar } from 'react-native';

let { height, width } = Dimensions.get('window');

const AUI_CONSTANTS = {
  verticalRhythm: 13,
  deviceWidth: width,
  deviceHeight: height,
  pixelDensity: PixelRatio.get(),
  statusBarHeight: StatusBar.currentHeight,
  availableHeight: () => (React.Platform.OS === 'android' ? height - StatusBar.currentHeight : height)
};

const AUI_FUNCTIONS = {
  verticalRhythm: (multiplier) => {
    let scale = (multiplier) ? multiplier : 1;
    return scale * AUI_CONSTANTS.verticalRhythm;
  }
};

export {
  AUI_CONSTANTS,
  AUI_FUNCTIONS
}