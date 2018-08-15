import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Container, Caption, Spacer, Subheadline, AUI_COLORS, AUI_LAYOUT, AUI_TYPOGRAPHY } from '../../../../Elements/index';
import {Icons} from "../../../../Elements/index";
import {AUI_FUNCTIONS} from "../../../../Helpers/index";

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
      data,
      error,
      onChangeText,
      value,
      onBlur,
      onFocus
    } = this.props;

    const labelsArr = [];
    if(data) {
      data.map((item, idx) => {
        labelsArr[item.value] = item.label ? item.label : item.value;
      });
    }

    return (
      <Container>
        <Caption>{label}</Caption>
        <Spacer dense />
        <Dropdown
          data={data}
          error={error}
          value={value}
          itemColor={AUI_COLORS.Slate.hex}
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
                  <Subheadline color={AUI_COLORS.Charcoal.tint1} isFlex>{this.state.customLabel ? labelsArr[this.state.customLabel] : label}</Subheadline>
                  <Icons
                    iconColor={AUI_COLORS.WalaTeal.hex}
                    iconSet={'font-awesome'}
                    iconSize={16}
                    iconName={'chevron-down'}
                  />
                </Container>
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

};

DropdownMenu.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array.isRequired,
  error: PropTypes.string,
  onChangeText: PropTypes.func,
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
    height: 52,
    paddingHorizontal: 13
  }
});

export  {
  DropdownMenu
}