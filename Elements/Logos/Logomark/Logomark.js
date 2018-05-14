import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image
} from 'react-native';
import { AUI_FUNCTIONS } from "../../../Helpers";

class Logomark extends Component {

  constructor(props) {
    super(props);
  }

  getImgSource = (variation) => {
    switch(variation) {
      case 'logomarkWhite':
        return require('../img/logomarks/logomark-white.png');
        break;
      case 'logomarkBlack':
        return require('../img/logomarks/logomark-black.png');
        break;
      case 'logomarkDala':
        return require('../img/logomarks/logomark-dala.png');
        break;
      case 'logomark':
      default:
        return require('../img/logomarks/logomark.png');
        break;
    }
  }

  render(){
    const {
      variation,
      imgHeight,
      ...props
    } = this.props;

    const imageHeight = (imgHeight) ? imgHeight : AUI_FUNCTIONS.gridBaseMultiplier(8);
    const imgStyle = {
      width: variation === 'logomarkDala' ? Math.ceil(imageHeight * 0.925) : Math.ceil(imageHeight * 1.8),
      height: imageHeight,
      resizeMode: 'contain'
    };

    // this is to enforce proper aspect ratios
    if(this.props.hasOwnProperty("style")) {
      if(this.props.style.hasOwnProperty("width"))
        delete this.props.style.width;
      if(this.props.style.hasOwnProperty("height"))
        delete this.props.style.height;
    }

    return(
      <Image
        {...props}
        source={this.getImgSource(variation)}
        style={[imgStyle, this.props.style]}
      />
    );
  }
}

Logomark.defaultProps = {
  variation: 'logomark'
};

Logomark.propTypes = {
  variation: PropTypes.oneOf([
    'logomark',
    'logomarkBlack',
    'logomarkWhite',
    'logomarkDala'
  ]),
  imgHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export {
  Logomark
}