import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Caption, Spacer, Icons, AUI_COLORS } from '../../../../Elements/index';

import CountryPicker from 'react-native-country-picker-modal';

class CountryInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cca2, onChange, searchable, countries, closeable, inputLabel, tileSelector, ...props } = this.props;
    return (
      <Container isFlex={tileSelector}>
        {!tileSelector &&
          <Caption style={{color: AUI_COLORS.Iron.hex}}>{inputLabel ? inputLabel : 'Country'}</Caption>
        }
        <CountryPicker
          cca2={cca2}
          closeable={closeable}
          searchable={searchable}
          showLetters
          enableEmptySections
          tileSelector={tileSelector}
          requiredCountries={countries}
          onChange={(value) => {
            onChange(value);
          }}
          pickerIcon={<Icons iconName={'globe'} iconSize={26}  iconColor={AUI_COLORS.WalaTeal.hex} />}
          smallPickerIcon={<Icons iconName={'globe'} iconSize={16}  iconColor={AUI_COLORS.WalaTeal.hex} />}
        />
        {!tileSelector &&
          <Spacer/>
        }
      </Container>
    );
  }
}

CountryInput.propTypes = {
  cca2: PropTypes.string,
  searchable: PropTypes.bool,
  closeable: PropTypes.bool,
  countries: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  tileSelector: PropTypes.bool,
  inputLabel: PropTypes.string
};

export  {
  CountryInput
}
