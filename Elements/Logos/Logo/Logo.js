import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image
} from 'react-native';
import { AUI_FUNCTIONS } from "../../../Helpers";

class Logo extends Component {

  constructor(props) {
    super(props);
  }

  getImgSource = (variation, centeredAdjust) => {
    switch(variation) {
      case 'logoWhiteText':
        return (centeredAdjust) ? require('../img/logos/logo-white-text-centered.png') : require('../img/logos/logo-white-text.png');
        break;
      case 'logoBlack':
        return (centeredAdjust) ? require('../img/logos/logo-black-centered.png') : require('../img/logos/logo-black.png');
        break;
      case 'logoWhite':
        return (centeredAdjust) ? require('../img/logos/logo-white-centered.png') : require('../img/logos/logo-white.png');
        break;
      case 'logo':
      default:
        return (centeredAdjust) ? require('../img/logos/logo-centered.png') : require('../img/logos/logo.png');
        break;
    }
  };

  render(){
    const {
      variation,
      leftAlignAdjust,
      centeredAdjust,
      imgHeight,
      ...props
    } = this.props;

    const imageHeight = (imgHeight) ? imgHeight : AUI_FUNCTIONS.gridBaseMultiplier(8);
    const imgStyle = {
      width: (centeredAdjust) ? Math.ceil(imgHeight * 1.435692921) : Math.ceil(imgHeight * 1.607178465),
      height: imageHeight,
      marginLeft: (leftAlignAdjust) ? (0 - leftAlignAdjust) : 0,
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
        source={this.getImgSource(variation, centeredAdjust)}
        style={[imgStyle, this.props.style]}
      />
    );
  }
}

Logo.defaultProps = {
  variation: 'logo'
};

Logo.propTypes = {
  variation: PropTypes.oneOf([
    'logo',
    'logoWhiteText',
    'logoBlack',
    'logoWhite'
  ]),
  leftAlignAdjust: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  centeredAdjust: PropTypes.bool,
  imgHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export {
  Logo
}