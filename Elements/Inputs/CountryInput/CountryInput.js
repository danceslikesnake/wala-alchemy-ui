import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Caption1, Spacer, AUI_COLORS } from '../../../Elements';

import CountryPicker from 'react-native-country-picker-modal';
import {Icons} from "../../";

class CountryInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cca2, onChange, searchable, countries, ...props } = this.props;

    return (
      <Container>
        <Caption1>{'Country'}</Caption1>
        <CountryPicker
          cca2={cca2}
          searchable={searchable}
          showLetters
          enableEmptySections
          requiredCountries={countries}
          onChange={(value) => {
            onChange(value);
          }}
          pickerIcon={<Icons iconName={'globe'} iconSize={26}  iconColor={AUI_COLORS.WalaTeal.hex} />}
        />
        <Spacer/>
      </Container>
    );
  }
}

CountryInput.propTypes = {
  cca2: PropTypes.string,
  searchable: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export  {
  CountryInput
}