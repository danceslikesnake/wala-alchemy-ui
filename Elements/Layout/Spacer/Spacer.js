import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';
import { AUI_CONSTANTS } from "../../../Helpers";

class Spacer extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {
      multiplier,
      dense
    } = this.props;

    return(
      <View
        style={{height: dense ? multiplier * AUI_CONSTANTS.gridBaseDense : multiplier * AUI_CONSTANTS.gridBase}}
      />
    );
  }
}

Spacer.defaultProps = {
  multiplier: 1,
  dense: false
};

Spacer.propTypes = {
  multiplier: PropTypes.number,
  dense: PropTypes.bool
};

export {
  Spacer
}