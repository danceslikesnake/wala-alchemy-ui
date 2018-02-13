import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { TextField as Input } from 'react-native-material-textfield';

import { Container, Caption1, Spacer, AUI_COLORS, AUI_LAYOUT, AUI_TYPOGRAPHY } from '../../../Elements';
import { AUI_FUNCTIONS, AUI_CONSTANTS } from "../../../Helpers";

class TextField extends Component {
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
    const { label, value, title, error, ...props } = this.props;

    return (
      <Container style={{paddingBottom: (title) ? 0 : 2}}>
        <Input
          {...props}
          label={label}
          value={value}
          title={title}
          error={error}
          labelHeight={20}
          labelPadding={9}
          fontSize={16}
          textColor={AUI_COLORS.Charcoal.hex}
          tintColor={AUI_COLORS.WalaTeal.hex}
          baseColor={AUI_COLORS.Slate.hex}
          errorColor={AUI_COLORS.TorchRed.hex}
          labelTextStyle={styles.labelTextStyle}
          titleTextStyle={[styles.titleTextStyle, (error) ? null : {color: AUI_COLORS.Iron.hex}]}
          affixTextStyle={styles.affixTextStyle}
          style={styles.inputText}
          lineWidth={1}
          onBlur={() => {
            this.onBlur();
          }}
          onFocus={() => {
            this.onFocus();
          }}
          inputContainerStyle={{borderBottomColor: this.state.underlineColor}}
        />
      </Container>
    );
  }
}

TextField.defaultProps = {

};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

const styles = StyleSheet.create({
  labelTextStyle: {
    fontFamily: AUI_TYPOGRAPHY.ProiximaNova.semibold,
    color: AUI_COLORS.Slate.hex
  },
  titleTextStyle: {
    fontFamily: AUI_TYPOGRAPHY.ProiximaNova.semibold_italic
  },
  affixTextStyle: {
    color: AUI_COLORS.Iron.hex
  },
  inputText: {
    fontFamily: AUI_TYPOGRAPHY.ProiximaNova.semibold,
    lineHeight: AUI_TYPOGRAPHY.typeScale.size16lineHeight
  }
});

export  {
  TextField
}