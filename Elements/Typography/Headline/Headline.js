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

class Headline extends Component {
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
      fontFamily,
      ...props } = this.props;
    return(
      <Text
        {...props}
        style={[
          dense ? styles.denseText : styles.text,
          fontFamily === 'Poppins' ? {fontFamily: AUI_TYPOGRAPHY.Poppins.regular} : {fontFamily: AUI_TYPOGRAPHY.ProximaNova.semibold},
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

Headline.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string,
  alignCenter: PropTypes.bool,
  alignRight: PropTypes.bool,
  isFlex: PropTypes.bool,
  dense: PropTypes.bool,
  fontFamily: PropTypes.oneOf([
    'ProximaNova',
    'Poppins'
  ]),
};

const styles = StyleSheet.create({
  text: {
    color: AUI_COLORS.Slate.hex,
    fontSize: AUI_TYPOGRAPHY.typeScale.size26,
    lineHeight: AUI_TYPOGRAPHY.typeScale.size26lineHeight
  },
  denseText: {
    color: AUI_COLORS.Slate.hex,
    fontSize: AUI_TYPOGRAPHY.typeScaleDense.size23,
    lineHeight: AUI_TYPOGRAPHY.typeScaleDense.size23lineHeight
  }
});

export {
  Headline
}