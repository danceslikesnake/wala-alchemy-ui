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
    height: 39,
    backgroundColor: 'transparent',
    paddingHorizontal: 13
  },
  primaryText: {
    color: WA_COLORS.WalaTeal.hex,
    fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold,
    fontSize: WA_TYPOGRAPHY.typeScale.size12
  },
  secondaryText: {
    color: WA_COLORS.Iron.hex,
    fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold,
    fontSize: WA_TYPOGRAPHY.typeScale.size12
  }
});

export {
  TransparentButton
}