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

class SmallDisplay extends Component {
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
      ...props } = this.props;
    return(
      <Text
        {...props}
        style={[
          styles.text,
          this.props.style,
          color ? {color: color} : null,
          alignCenter ? {textAlign: 'center'} : null,
          alignRight ? {textAlign: 'right'} : null,
          isFlex ? {flex: 1} : null
        ]}
      >
        {children.toUpperCase()}
      </Text>
    );
  }
}

SmallDisplay.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  alignCenter: PropTypes.bool,
  alignRight: PropTypes.bool,
  isFlex: PropTypes.bool
};

const styles = StyleSheet.create({
  text: {
    fontSize: AUI_TYPOGRAPHY.typeScale.size12,
    color: AUI_COLORS.Slate.hex,
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold
  }
});

export {
  SmallDisplay
}