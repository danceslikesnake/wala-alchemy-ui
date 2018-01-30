import React  from 'react';
import { Dimensions, PixelRatio, StatusBar } from 'react-native';

let { height, width } = Dimensions.get('window');

const AUI_CONSTANTS = {
  gridBase: 13,
  gridBaseDense: 8,
  deviceWidth: width,
  deviceHeight: height,
  pixelDensity: PixelRatio.get(),
  statusBarHeight: StatusBar.currentHeight,
  availableHeight: () => (React.Platform.OS === 'android' ? height - StatusBar.currentHeight : height)
};

const AUI_FUNCTIONS = {
  gridBaseMultiplier: (multiplier, dense = false) => {
    let scale = (multiplier) ? multiplier : 1;
    return (dense) ? scale * AUI_CONSTANTS.gridBaseDense : scale * AUI_CONSTANTS.gridBase;
  }
};

export {
  AUI_CONSTANTS,
  AUI_FUNCTIONS
}