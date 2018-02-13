import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import { WA_COLORS } from "../../Colors";
import { WA_TYPOGRAPHY, SmallDisplay } from "../../Typography";
import { WA_LAYOUT } from "../../Layout";

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
            WA_LAYOUT.roundCorners
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
    height: 39
  },
  primary: {
    backgroundColor: WA_COLORS.WalaTeal.hex
  },
  primaryText: {
    color: 'white',
  },
  secondary: {
    backgroundColor: WA_COLORS.Iron.hex
  },
  secondaryText: {
    color: 'white',
  },
  disabled: {
    backgroundColor: 'transparent'
  },
  disabledText: {
    color: WA_COLORS.Iron.hex
  }
});

export {
  CallToActionButton
}