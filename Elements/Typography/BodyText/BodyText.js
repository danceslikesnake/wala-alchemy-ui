import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet
} from 'react-native';
import {
  WA_COLORS,
} from "../../Colors/index";
import {WA_TYPOGRAPHY} from "../fontStyles";

class BodyText extends Component {
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

BodyText.propTypes = {
  children: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  text: {
    color: WA_COLORS.Slate.hex,
    fontFamily: WA_TYPOGRAPHY.ProiximaNova.regular,
    fontSize: WA_TYPOGRAPHY.typeScale.size16,
    lineHeight: WA_TYPOGRAPHY.typeScale.lineHeight26
  }
});

export {
  BodyText
}