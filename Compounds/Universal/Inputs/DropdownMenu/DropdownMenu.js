import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Container, Caption, CaptionEmphasis, Spacer, Subheadline, Icons, AUI_COLORS, AUI_LAYOUT, AUI_TYPOGRAPHY } from '../../../../Elements/index';
import {AUI_FUNCTIONS, AUI_CONSTANTS} from "../../../../Helpers/index";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      underlineColor: AUI_COLORS.Iron.hex,
      customLabel: ''
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
      dropdownItems,
      error,
      onChangeText,
      value,
      placeholder,
      onBlur,
      onFocus
    } = this.props;

    const labelsArr = [];
    if(dropdownItems) {
      dropdownItems.map((item, idx) => {
        labelsArr[item.value] = item.label ? item.label : item.value;
      });
    }

    return (
      <Container>
        <Caption>{label}</Caption>
        <Spacer dense />
        <Dropdown
          data={dropdownItems}
          error={error}
          value={value}
          itemColor={AUI_COLORS.Slate.hex}
          itemTextStyle={styles.itemTextStyle}
          selectedItemColor={AUI_COLORS.WalaTeal.hex}
          onChangeText={(text) => {
            this.setState({
              customLabel: text
            });
            onChangeText(text);
          }}
          renderBase={() => {
            return(
              <Container>
                <Container
                  actAsRow
                  alignItems={'center'}
                  style={styles.customInput}
                >
                  <Subheadline
                    color={AUI_COLORS.Charcoal.tint1}
                    isFlex>
                    {value ? value :
                      this.state.customLabel ? labelsArr[this.state.customLabel] : placeholder}
                  </Subheadline>
                  <Icons
                    iconColor={AUI_COLORS.WalaTeal.hex}
                    iconSet={'font-awesome'}
                    iconSize={16}
                    iconName={'chevron-down'}
                  />
                </Container>
                {error && <Container><Spacer dense /><CaptionEmphasis color={AUI_COLORS.TorchRed.tint2}>{error}</CaptionEmphasis></Container>}
                <Spacer />
              </Container>
            );
          }}
          onBlur={() => {
            this.onBlur();
            if(onBlur)
              onBlur();
          }}
          onFocus={() => {
            this.onFocus();
            if(onFocus)
              onFocus();
          }}
        />
      </Container>
    );
  }
}

DropdownMenu.defaultProps = {
  placeholder: 'Select...'
};

DropdownMenu.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  dropdownItems: PropTypes.array.isRequired,
  error: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};

const styles = StyleSheet.create({
  customInput: {
    backgroundColor: 'white',
    borderRadius: 3,
    elevation: 1,
    marginHorizontal: 1,
    borderWidth: 1,
    borderColor: AUI_COLORS.Iron.hex,
    height: AUI_FUNCTIONS.gridBaseMultiplier(4),
    paddingHorizontal: AUI_CONSTANTS.gridBase
  },
  itemTextStyle: {
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.semibold,
    fontSize: AUI_TYPOGRAPHY.typeScale.size16
  }
});

export  {
  DropdownMenu
}