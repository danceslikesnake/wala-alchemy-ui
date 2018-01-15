import Dimensions from 'Dimensions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image
} from 'react-native';

let deviceWidth = Dimensions.get('window').width;

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
      case 'logomark':
      default:
        return require('../img/logomarks/logomark.png');
        break;
    }
  }

  render(){
    const {
      variation,
      imgWidth,
      ...props
    } = this.props;

    const imageWidth = (imgWidth) ? imgWidth : Math.round(deviceWidth);
    const imgStyle = {
      width: imageWidth,
      height: Math.ceil(imageWidth * 0.571428571),
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
    'logomarkWhite'
  ]),
  imgWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export {
  Logomark
}