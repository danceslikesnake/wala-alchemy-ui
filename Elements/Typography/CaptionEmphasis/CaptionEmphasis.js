import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet
} from 'react-native';
import {
  AUI_COLORS
} from "../../index";
import {AUI_TYPOGRAPHY} from "../fontStyles";

class CaptionEmphasis extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {
      children,
      color,
      alignCenter,
      alignRight,
      isFlex,
      dense,
      ...props } = this.props;
    return(
      <Text
        {...props}
        style={[
          dense ? styles.denseText : styles.text,
          this.props.style,
          color ? {color: color} : null,
          alignCenter ? {textAlign: 'center'} : null,
          alignRight ? {textAlign: 'right'} : null,
          isFlex ? {flex: 1} : null
        ]}
      >
        {children}
      </Text>
    );
  }
}

CaptionEmphasis.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string,
  alignCenter: PropTypes.bool,
  alignRight: PropTypes.bool,
  isFlex: PropTypes.bool,
  dense: PropTypes.bool
};

const styles = StyleSheet.create({
  text: {
    color: AUI_COLORS.Slate.hex,
    fontSize: AUI_TYPOGRAPHY.typeScale.size12,
    lineHeight: AUI_TYPOGRAPHY.typeScale.size12lineHeight,
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.semibold_italic
  },
  denseText: {
    color: AUI_COLORS.Slate.hex,
    fontSize: AUI_TYPOGRAPHY.typeScaleDense.size10,
    lineHeight: AUI_TYPOGRAPHY.typeScaleDense.size10lineHeight,
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.semibold_italic
  },
});

export {
  CaptionEmphasis
}