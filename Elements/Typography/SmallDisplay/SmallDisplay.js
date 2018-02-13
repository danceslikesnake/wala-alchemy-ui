import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet
} from 'react-native';
import {
  WA_COLORS
} from "../../index";
import {WA_TYPOGRAPHY} from "../fontStyles";

class SmallDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {
      children,
      ...props } = this.props;
    return(
      <Text
        {...props}
        style={[styles.text, this.props.style]}
      >
        {children.toUpperCase()}
      </Text>
    );
  }
}

SmallDisplay.propTypes = {
  children: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  text: {
    fontSize: WA_TYPOGRAPHY.typeScale.size12,
    color: WA_COLORS.Slate.hex,
    fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold
  }
});

export {
  SmallDisplay
}