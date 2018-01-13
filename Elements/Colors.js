import chroma from 'chroma-js';

export const colorMatrix = {
  WalaTeal: {
    hex: '#1DC4BD',
    r: 29,
    g: 196,
    b: 189
  },
  Charcoal: {
    hex: '#011627',
    r: 1,
    g: 22,
    b: 39
  },
  TorchRed: {
    hex: '#F71735',
    r: 247,
    g: 23,
    b: 53
  },
  PoppyYellow: {
    hex: '#FF9F1C',
    r: 255,
    g: 159,
    b: 28
  },
  CuriousBlue: {
    hex: '#049FE7',
    r: 4,
    g: 159,
    b: 231
  },
  ScampiPurple: {
    hex: '#746FB0',
    r: 116,
    g: 111,
    b: 176
  },
  Slate: {
    hex: '#6C7882',
    r: 108,
    g: 120,
    b: 130
  },
  Iron: {
    hex: '#B2B9BE',
    r: 178,
    g: 185,
    b: 190
  },
  Silver: {
    hex: '#E0E3E5',
    r: 0,
    g: 0,
    b: 0
  },
};

export function getHex(color) {
  return colorMatrix[color].hex;
}