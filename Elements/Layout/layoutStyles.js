let aspectRatios = [];
aspectRatios['narrow'] = 0.5;
aspectRatios['widescreen'] = 0.5625;
aspectRatios['landscape'] = 2/3;
aspectRatios['standard'] = 0.75;
aspectRatios['square'] = 1;
aspectRatios['tall'] = 4/3;
aspectRatios['portrait'] = 3/2;

const AUI_LAYOUT = {
  roundCorners: {
    borderRadius: 3
  },
  roundTopCorners: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  roundBottomCorners: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  roundLeftCorners: {
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  roundRightCorners: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  elevation1: {
    elevation: 1,
    backgroundColor: 'white'
  },
  elevation2: {
    elevation: 2,
    backgroundColor: 'white'
  },
  elevation3: {
    elevation: 3,
    backgroundColor: 'white'
  },
  elevation4: {
    elevation: 4,
    backgroundColor: 'white'
  },
  aspectRatios: aspectRatios,
  presets: {
    card: {
      borderRadius: 3,
      elevation: 3,
      backgroundColor: 'white'
    }
  }
};

export {
  AUI_LAYOUT
}