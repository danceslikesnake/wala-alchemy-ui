import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet
} from 'react-native';
import {
  AUI_COLORS
} from "../../index";
import {AUI_TYPOGRAPHY, defaultTextStyle} from "../fontStyles";

const SmallDisplay = ({
  children,
  color,
  alignCenter,
  alignRight,
  isFlex,
  style,
  ...props 
}) => {
    
  let safeChildren = children;
  if (typeof children === 'string') {
    safeChildren = safeChildren.toUpperCase();
  }

  return (
    <Text
      style={[
        defaultTextStyle,
        styles.text,
        style ? style : null,
        color ? {color: color} : null,
        alignCenter ? {textAlign: 'center'} : null,
        alignRight ? {textAlign: 'right'} : null,
        isFlex ? {flex: 1} : null
      ]}
      {...props}
    >
      {safeChildren}
    </Text>
  );
}


SmallDisplay.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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