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

class TransparentButton extends Component {

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

TransparentButton.defaultProps = {
  variation: 'primary'
};

TransparentButton.propTypes = {
  variation: PropTypes.oneOf([
    'primary',
    'secondary'
  ]),
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  button: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    backgroundColor: 'transparent',
    paddingHorizontal: AUI_FUNCTIONS.gridBaseMultiplier(1)
  },
  primaryText: {
    color: AUI_COLORS.WalaTeal.hex
  },
  secondaryText: {
    color: AUI_COLORS.Iron.hex
  }
});

export {
  TransparentButton
}