import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  StyleSheet
} from 'react-native';
import { AUI_FUNCTIONS } from "../../../Helpers";

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
          styles[variation],
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

const styles = StyleSheet.create({
  full: {
  },
  wide: {
    marginHorizontal: 4,
    paddingHorizontal: 9
  },
  card: {
    marginHorizontal: AUI_FUNCTIONS.verticalRhythm()
  }
});

export {
  ImageContainer
}