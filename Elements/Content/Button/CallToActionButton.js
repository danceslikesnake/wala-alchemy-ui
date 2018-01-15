import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import { WA_COLORS } from "../../Colors";
import { WA_TYPOGRAPHY } from "../../Typography";
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
          <Text style={styles[variation + 'Text']}>
            {label.toUpperCase()}
          </Text>
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
    fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold,
    color: 'white',
    fontSize: WA_TYPOGRAPHY.typeScale.size12
  },
  secondary: {
    backgroundColor: WA_COLORS.Iron.hex
  },
  secondaryText: {
    fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold,
    color: 'white',
    fontSize: WA_TYPOGRAPHY.typeScale.size12
  },
  disabled: {
    backgroundColor: 'transparent'
  },
  disabledText: {
    fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold,
    color: WA_COLORS.Iron.hex,
    fontSize: WA_TYPOGRAPHY.typeScale.size12
  }
});

export {
  CallToActionButton
}