import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';
import { ContainerStyles } from "../layoutStyles";

class Container extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {
      variation,
      children,
      ...props
    } = this.props;

    return(
      <View
        {...props}
        style={[ContainerStyles[variation], this.props.style]}
      >
        {children}
      </View>
    );
  }
}

Container.defaultProps = {
  variation: 'full'
};

Container.propTypes = {
  variation: PropTypes.oneOf([
    'full',
    'wide',
    'card'
  ])
};

export {
  Container
}