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
      actAsRow,
      children,
      ...props
    } = this.props;

    return(
      <View
        {...props}
        style={[
          ContainerStyles[variation],
          actAsRow ? {flexDirection: 'row'} : null,
          this.props.style
        ]}
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
  ]),
  actAsRow: PropTypes.bool
};

export {
  Container
}