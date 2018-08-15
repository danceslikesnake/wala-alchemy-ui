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
import {AUI_CONSTANTS, AUI_FUNCTIONS} from "../../../Helpers";
import { AUI_LAYOUT } from "../../Layout";
import { Icons } from '../../Icons/Icons';

class CallToActionButton extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {
      variation,
      onPress,
      label,
      addArrow,
      ...props
    } = this.props;

    return(
      <TouchableNativeFeedback
        {...props}
        onPress={variation !== 'disabled' ? onPress : null}
      >
        <View
          style={[
            (addArrow && variation !== 'disabled') ? styles.buttonWithArrow : styles.button,
            styles[variation],
            AUI_LAYOUT.roundCorners
          ]}
        >
          <SmallDisplay style={[
            styles[variation + 'Text'],
            (addArrow && variation !== 'disabled') ? {flex: 1} : null
          ]}>
            {label.toUpperCase()}
          </SmallDisplay>
          {(addArrow && variation !== 'disabled') &&
            <View
              style={[
                styles.arrowOrnament,
                variation === 'primary' ? {backgroundColor: AUI_COLORS.WalaTeal.tint1} : null,
                variation === 'secondary' ? {backgroundColor: AUI_COLORS.Charcoal.tint3} : null
              ]}>
              <Icons
                iconName={'chevron-right'}
                iconSet={'font-awesome'}
                iconColor={'white'}
                iconSize={16}
              />
            </View>
          }
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
  label: PropTypes.string.isRequired,
  addArrow: PropTypes.bool
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    paddingHorizontal: AUI_CONSTANTS.gridBase
  },
  buttonWithArrow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    paddingLeft: AUI_CONSTANTS.gridBase
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
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AUI_COLORS.Silver.hex
  },
  disabledText: {
    color: AUI_COLORS.Iron.hex
  },
  arrowOrnament: {
    width: AUI_FUNCTIONS.gridBaseMultiplier(3),
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3
  }
});

export {
  CallToActionButton
}