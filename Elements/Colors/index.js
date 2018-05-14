import chroma from 'chroma-js';

/**
 * rgba helper function
 * @param rgb
 * @param percent
 * @returns {string}
 */
function rgba(rgb, percent) {
  return 'rgba(' +  rgb + ', ' + percent + ')';
}

/**
 * range helper function (brightens or darkens colors)
 * @param type
 * @param color
 * @param percentage
 * @param mixColor
 * @param mixPercent
 * @returns {string}
 */
function range(type, color, percentage, mixColor, mixPercent) {
  let mixType = (type == 'shade') ? AUI_COLORS.Charcoal.hex : '#FFFFFF';
  let initialColor = chroma.mix(color, mixType, percentage);
  if(mixColor) {
    let mixedColor = chroma.mix(initialColor, mixColor, mixPercent);
    return chroma(mixedColor).hex();
  } else {
    return chroma(initialColor).hex();
  }
}

const AUI_COLORS = {
  getRgbaFromHex: function(hex, opacity) {
    let rgb = chroma(hex).rgb();
    return rgba(rgb[0] + ', ' + rgb[1] + ', ' + rgb[2], opacity);
  },
  getRgbFromHex: function(hex) {
    let rgb = chroma(hex).rgb();
    return rgb[0] + ', ' + rgb[1] + ', '+ rgb[2];
  },
  WalaTeal: {
    hex: '#1DC4BD',
    r: 29,
    g: 196,
    b: 189,
    tint1: '#4AD0CA',
    tint2: '#77DCD7',
    tint3: '#A5E7E4',
    tint4: '#D2F3F2',
    shade1: '#25959B',
    shade2: '#20747B',
    shade3: '#1B535B',
    shade4: '#183A43',
    getRgba: function(opacity) {
      return rgba(this.r + ', ' + this.g + ', ' + this.b, opacity);
    },
    getShade: function(percent) {
      return range('shade', this.hex, percent, AUI_COLORS.ScampiPurple.hex, 0.15);
    },
    getTint: function(percent) {
      return range('tint', this.hex, percent, null, null);
    }
  },
  Charcoal: {
    hex: '#011627',
    r: 1,
    g: 22,
    b: 39,
    tint1: '#334452',
    tint2: '#67737C',
    tint3: '#99A2A9',
    tint4: '#CCD0D4',
    getRgba: function(opacity) {
      return rgba(this.r + ', ' + this.g + ', ' + this.b, opacity);
    },
    getTint: function(percent) {
      return range('tint', this.hex, percent, null, null);
    }
  },
  TorchRed: {
    hex: '#F71735',
    r: 247,
    g: 23,
    b: 53,
    tint1: '#F9445C',
    tint2: '#FA7485',
    tint3: '#FCA2AE',
    tint4: '#FDD0D7',
    shade1: '#B9203E',
    shade2: '#8F1C35',
    shade3: '#65172B',
    shade4: '#461625',
    getRgba: function(opacity) {
      return rgba(this.r + ', ' + this.g + ', ' + this.b, opacity);
    },
    getShade: function(percent) {
      return range('shade', this.hex, percent, AUI_COLORS.ScampiPurple.hex, 0.15);
    },
    getTint: function(percent) {
      return range('tint', this.hex, percent, null, null);
    }
  },
  PoppyYellow: {
    hex: '#FF9F1C',
    r: 255,
    g: 159,
    b: 28,
    tint1: '#FFAA48',
    tint2: '#FFBD74',
    tint3: '#FFCF9F',
    tint4: '#FFE1CA',
    shade1: '#D2701B',
    shade2: '#A75516',
    shade3: '#7C3A11',
    shade4: '#5B250D',
    getRgba: function(opacity) {
      return rgba(this.r + ', ' + this.g + ', ' + this.b, opacity);
    },
    getShade: function(percent) {
      return range('shade', this.hex, percent, AUI_COLORS.TorchRed.hex, 0.15);
    },
    getTint: function(percent) {
      return range('tint', this.hex, percent, AUI_COLORS.TorchRed.hex, 0.05);
    }
  },
  CuriousBlue: {
    hex: '#049FE7',
    r: 4,
    g: 159,
    b: 231,
    tint1: '#36B2EC',
    tint2: '#68C4F1',
    tint3: '#9BD8F5',
    tint4: '#CDECFA',
    shade1: '#1C74AC',
    shade2: '#1B5882',
    shade3: '#1A3B58',
    shade4: '#1A2539',
    getRgba: function(opacity) {
      return rgba(this.r + ', ' + this.g + ', ' + this.b, opacity);
    },
    getShade: function(percent) {
      return range('shade', this.hex, percent, AUI_COLORS.TorchRed.hex, 0.10);
    },
    getTint: function(percent) {
      return range('tint', this.hex, percent, null, null);
    }
  },
  ScampiPurple: {
    hex: '#746FB0',
    r: 116,
    g: 111,
    b: 176,
    tint1: '#908CC0',
    tint2: '#ACA9D0',
    tint3: '#C7C5DF',
    tint4: '#E3E2EF',
    shade1: '#5C588D',
    shade2: '#454369',
    shade3: '#2E2C46',
    shade4: '#1C1B2B',
    getRgba: function(opacity) {
      return rgba(this.r + ', ' + this.g + ', ' + this.b, opacity);
    },
    getShade: function(percent) {
      return range('shade', this.hex, percent, null, null);
    },
    getTint: function(percent) {
      return range('tint', this.hex, percent, null, null);
    }
  },
  Slate: {
    hex: '#6C7882',
    r: 108,
    g: 120,
    b: 130,
    getRgba: function(opacity) {
      return rgba(this.r + ', ' + this.g + ', ' + this.b, opacity);
    }
  },
  Iron: {
    hex: '#B2B9BE',
    r: 178,
    g: 185,
    b: 190,
    getRgba: function(opacity) {
      return rgba(this.r + ', ' + this.g + ', ' + this.b, opacity);
    }
  },
  Silver: {
    hex: '#E0E3E5',
    r: 224,
    g: 227,
    b: 229,
    getRgba: function(opacity) {
      return rgba(this.r + ', ' + this.g + ', ' + this.b, opacity);
    }
  },
};

export {
  AUI_COLORS
}