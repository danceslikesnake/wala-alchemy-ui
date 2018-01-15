import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground
} from 'react-native';
import { ContainerStyles } from "../layoutStyles";

class ImageContainer extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {
      variation,
      source,
      actAsRow,
      children,
      ...props
    } = this.props;

    return(
      <ImageBackground
        {...props}
        source={source}
        imageStyle={{resizeMode: 'cover'}}
        style={[
          ContainerStyles[variation],
          actAsRow ? {flexDirection: 'row'} : null,
          this.props.style
        ]}
      >
        {children}
      </ImageBackground>
    );
  }
}

ImageContainer.defaultProps = {
  variation: 'full'
};

ImageContainer.propTypes = {
  variation: PropTypes.oneOf([
    'full',
    'wide',
    'card'
  ]),
  source: PropTypes.number.isRequired,
  actAsRow: PropTypes.bool
};

export {
  ImageContainer
}