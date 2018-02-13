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

class Headline1 extends Component {
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

Headline1.propTypes = {
  children: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  text: {
    color: WA_COLORS.Slate.hex,
    fontFamily: WA_TYPOGRAPHY.Poppins.regular,
    fontSize: WA_TYPOGRAPHY.typeScale.size26,
    lineHeight: WA_TYPOGRAPHY.typeScale.lineHeight39
  }
});

export {
  Headline1
}