import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';

class Spacer extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {
      multiplier
    } = this.props;

    return(
      <View
        style={{height: multiplier * 13}}
      />
    );
  }
}

Spacer.defaultProps = {
  multiplier: 1
};

Spacer.propTypes = {
  multiplier: PropTypes.number
};

export {
  Spacer
}