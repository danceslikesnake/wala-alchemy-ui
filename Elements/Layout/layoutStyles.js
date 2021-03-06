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
  aspectRatios: {
    narrow: 0.5,
    widescreen: 0.5625,
    landscape: 2/3,
    standard: 0.75,
    square: 1,
    tall: 4/3,
    portrait: 3/2
  },
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