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

class DenseBodyText extends Component {
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
        {children}
      </Text>
    );
  }
}

DenseBodyText.propTypes = {
  children: PropTypes.string.isRequired,
  textStyles: PropTypes.object
};

const styles = StyleSheet.create({
  text: {
    color: WA_COLORS.Slate.hex,
    fontFamily: WA_TYPOGRAPHY.ProiximaNova.regular,
    fontSize: WA_TYPOGRAPHY.typeScaleDense.size14,
    lineHeight: WA_TYPOGRAPHY.typeScaleDense.lineHeight26
  }
});

export {
  DenseBodyText
}