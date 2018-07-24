import React, { Dimensions, PixelRatio, StatusBar } from 'react-native';

let { height, width } = Dimensions.get('window');

let aspectRatios = [];
aspectRatios['narrow'] = 0.5;
aspectRatios['widescreen'] = 0.5625;
aspectRatios['landscape'] = 2/3;
aspectRatios['standard'] = 0.75;
aspectRatios['square'] = 1;
aspectRatios['tall'] = 4/3;
aspectRatios['portrait'] = 3/2;

const AUI_CONSTANTS = {
  gridBase: 13,
  gridBaseDense: 8,
  deviceWidth: width,
  deviceHeight: height,
  pixelDensity: PixelRatio.get(),
  statusBarHeight: StatusBar.currentHeight,
  availableHeight: () => (React.Platform.OS === 'android' ? height - StatusBar.currentHeight : height),
  aspectRatios: aspectRatios
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