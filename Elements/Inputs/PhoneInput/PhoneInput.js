import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import { Container, Caption1, Spacer, AUI_COLORS, AUI_LAYOUT, AUI_TYPOGRAPHY } from '../../../Elements';
import { AUI_FUNCTIONS } from "../../../Helpers";

import CountryPicker from 'react-native-country-picker-modal';
import {Icons} from "../../";

class PhoneInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cca2, onChange, searchable, countries, value, defaultValue, onChangeText, returnKeyType, next } = this.props;

    return (
      <Container>
        <Caption1>{'Mobile Phone'}</Caption1>
        <Container actAsRow={cca2 ? true : false} style={{height: 48, borderBottomWidth: 1, borderBottomColor: AUI_COLORS.Iron.hex}}>
          <CountryPicker
            cca2={cca2}
            searchable={searchable}
            showLetters
            phoneSelector
            enableEmptySections
            requiredCountries={countries}
            onChange={(value) => {
              onChange(value);
            }}
            pickerIcon={<Icons variation={'material-design'} iconName={'phone'} iconSize={26} iconColor={AUI_COLORS.WalaTeal.hex} />}
          />
          <TextInput
            value={value}
            placeholder={'Phone number'}
            style={styles.input}
            underlineColorAndroid={'transparent'}
            keyboardType={'phone-pad'}
            defaultValue={defaultValue}
            onChangeText={(value) => { onChangeText(value); }}
            returnKeyType={returnKeyType}
            blurOnSubmit={blurOnSubmit}
            onSubmitEditing={next}
          />
        </Container>
        <Spacer/>
      </Container>
    );
  }
}

PhoneInput.defaultProps = {

};

PhoneInput.propTypes = {

};

const styles = StyleSheet.create({
  input: {
    flex: 1
  }
});

export  {
  PhoneInput
}