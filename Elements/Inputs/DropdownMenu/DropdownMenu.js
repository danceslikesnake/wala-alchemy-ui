import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Container, Caption1, Spacer, AUI_COLORS, AUI_LAYOUT, AUI_TYPOGRAPHY } from '../../../Elements';
import {Icons} from "../../";
import {AUI_FUNCTIONS} from "../../../Helpers";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      underlineColor: AUI_COLORS.Iron.hex
    };
  }

  onBlur() {
    this.setState({
      underlineColor: AUI_COLORS.Iron.hex
    });
  }

  onFocus() {
    this.setState({
      underlineColor: AUI_COLORS.WalaTeal.hex
    });
  }

  render() {
    const {
      label,
      data,
      error,
      onChangeText,
      value,
      onBlur,
      onFocus
    } = this.props;

    return (
      <Container>
        <Dropdown
          label={label}
          data={data}
          error={error}
          value={value}
          fontSize={AUI_TYPOGRAPHY.typeScale.size16}
          labelHeight={25}
          labelPadding={13}
          lineWidth={1}
          baseColor={AUI_COLORS.Slate.hex}
          textColor={AUI_COLORS.Charcoal.hex}
          itemColor={AUI_COLORS.Slate.hex}
          errorColor={AUI_COLORS.TorchRed.hex}
          selectedItemColor={AUI_COLORS.WalaTeal.hex}
          labelTextStyle={styles.labelTextStyle}
          itemTextStyle={styles.itemText}
          style={styles.inputText}
          onChangeText={() => {onChangeText();}}
          inputContainerStyle={[{borderBottomColor: this.state.underlineColor}, styles.inputContainer]}
          renderAccessory={() => {
            return <Icons
              containerStyles={{marginBottom: 4}}
              iconName={'arrow-drop-down'}
              variation={'material-design'}
              iconSize={26}
              iconColor={AUI_COLORS.WalaTeal.hex}
            />;
          }}
          onBlur={() => {
            this.onBlur();
            onBlur();
          }}
          onFocus={() => {
            this.onFocus();
            onFocus();
          }}
        />
      </Container>
    );
  }
}

DropdownMenu.defaultProps = {

};

DropdownMenu.propTypes = {
  label: PropTypes.string,
  date: PropTypes.array,
  error: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};

const styles = StyleSheet.create({
  labelTextStyle: {
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.semibold,
    color: AUI_COLORS.Slate.hex
  },
  titleTextStyle: {
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.semibold_italic
  },
  inputText: {
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.semibold,
    lineHeight: AUI_TYPOGRAPHY.typeScale.size16lineHeight
  },
  itemText: {
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.semibold,
    lineHeight: AUI_TYPOGRAPHY.typeScale.size16lineHeight
  },
  inputContainer: {
    marginBottom: AUI_FUNCTIONS.gridBaseMultiplier(1, true),
    paddingTop: AUI_FUNCTIONS.gridBaseMultiplier(2),
    justifyContent: 'center'
  }
});

export  {
  DropdownMenu
}