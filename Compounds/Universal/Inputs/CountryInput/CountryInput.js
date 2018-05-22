import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Caption1, Spacer, AUI_COLORS } from '../../../../Elements/index';

import CountryPicker from 'react-native-country-picker-modal';
import {Icons} from "../../../../Elements/index";

class CountryInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cca2, onChange, searchable, countries, closeable, inputLabel, ...props } = this.props;

    return (
      <Container>
        <Caption1 style={{color: AUI_COLORS.Iron.hex}}>{inputLabel ? inputLabel : 'Country'}</Caption1>
        <CountryPicker
          cca2={cca2}
          closeable={closeable}
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
  closeable: PropTypes.bool,
  countries: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export  {
  CountryInput
}