import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { ContainerStyles } from "../layoutStyles";

class GradientContainer extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {
      variation,
      colors,
      children,
      ...props
    } = this.props;

    return(
      <LinearGradient
        {...props}
        colors={colors}
        style={[ContainerStyles[variation], this.props.style]}
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      >
        {children}
      </LinearGradient>
    );
  }
}

GradientContainer.defaultProps = {
  variation: 'full'
};

GradientContainer.propTypes = {
  variation: PropTypes.oneOf([
    'full',
    'wide',
    'card'
  ]),
  colors: PropTypes.array.isRequired
};

export {
  GradientContainer
}