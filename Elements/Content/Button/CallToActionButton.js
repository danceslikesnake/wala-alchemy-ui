import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import { AUI_COLORS } from "../../Colors";
import { SmallDisplay } from "../../Typography";
import { AUI_FUNCTIONS } from "../../../Helpers";
import { AUI_LAYOUT } from "../../Layout";

class CallToActionButton extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {
      variation,
      onPress,
      label,
      ...props
    } = this.props;

    return(
      <TouchableNativeFeedback
        {...props}
        onPress={variation !== 'disabled' ? onPress : null}
      >
        <View
          style={[
            styles.button,
            styles[variation],
            AUI_LAYOUT.roundCorners
          ]}
        >
          <SmallDisplay style={styles[variation + 'Text']}>
            {label}
          </SmallDisplay>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

CallToActionButton.defaultProps = {
  variation: 'primary'
};

CallToActionButton.propTypes = {
  variation: PropTypes.oneOf([
    'primary',
    'secondary',
    'disabled'
  ]),
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: AUI_FUNCTIONS.gridBaseMultiplier(3)
  },
  primary: {
    backgroundColor: AUI_COLORS.WalaTeal.hex
  },
  primaryText: {
    color: 'white',
  },
  secondary: {
    backgroundColor: AUI_COLORS.Iron.hex
  },
  secondaryText: {
    color: 'white',
  },
  disabled: {
    backgroundColor: 'transparent'
  },
  disabledText: {
    color: AUI_COLORS.Iron.hex
  }
});

export {
  CallToActionButton
}