import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, TouchableOpacity, InteractionManager } from 'react-native';
import { Container, Caption, CaptionEmphasis, Spacer, AUI_COLORS, AUI_LAYOUT, AUI_TYPOGRAPHY } from '../../../../Elements/index';
import { AUI_FUNCTIONS } from "../../../../Helpers/index";

import CountryPicker from 'react-native-country-picker-modal';
import {Icons} from "../../../../Elements/index";

class PhoneInput extends Component {
  constructor(props) {
    super(props);
  }

  focus() {
    this.input.focus();
    this.props.onFocus && this.props.onFocus();
  }

  focusCountryPicker() {
    this.countryPicker.openModal();
  }

  render() {
    const {
      cca2,
      searchable,
      onChangeCountry,
      onChangePhoneText,
      addContacts,
      closeable,
      countries,
      phoneNumber,
      returnKeyType,
      next,
      blurOnSubmit,
      onAddContactsSelect,
      error
    } = this.props;

    return (
      <Container>
        <Caption>{'Mobile Phone'}</Caption>
        <Container
          actAsRow={cca2 ? true : false}
          style={[styles.inputWrapper, error ? {borderBottomColor: AUI_COLORS.TorchRed.hex} : null]}
        >
          <CountryPicker
            ref={countryPicker => (this.countryPicker = countryPicker)}
            cca2={cca2}
            closeable={closeable}
            searchable={searchable}
            showLetters
            phoneSelector
            enableEmptySections
            requiredCountries={countries}
            onChange={(value) => {
              onChangeCountry(value);

              InteractionManager.runAfterInteractions(() => {
                this.focus();
              });
            }}
            pickerIcon={<Icons
              iconSet={'material-design'}
              iconName={'phone'}
              iconSize={26}
              iconColor={AUI_COLORS.WalaTeal.hex} />}
          />
          <TextInput
            ref={input => (this.input = input)}
            value={phoneNumber}
            placeholder={'Phone number'}
            placeholderTextColor={AUI_COLORS.Iron.hex}
            style={styles.input}
            underlineColorAndroid={'transparent'}
            keyboardType={'phone-pad'}
            defaultValue={phoneNumber}
            onChangeText={(value) => {
              onChangePhoneText(value);
            }}
            returnKeyType={returnKeyType}
            blurOnSubmit={blurOnSubmit}
            onSubmitEditing={next}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => { this.input.focus(); }}
          >
            <Icons
              iconSet={'material-design'}
              iconName={'phone'}
              iconSize={26}
              iconColor={AUI_COLORS.WalaTeal.hex}
            />
          </TouchableOpacity>
          {addContacts && (
            <Container>
              <TouchableOpacity
                style={styles.contactIcon}
                onPress={() => { onAddContactsSelect ? onAddContactsSelect() : null; }}
              >
                <Icons
                  iconSet={'material-design'}
                  iconName={'contacts'}
                  iconSize={26}
                  iconColor={AUI_COLORS.WalaTeal.hex}
                />
              </TouchableOpacity>
            </Container>
          )}
        </Container>
        {error &&
        <Container style={styles.error}>
          <CaptionEmphasis style={styles.errorText}>{error}</CaptionEmphasis>
        </Container>
        }
        <Spacer/>
      </Container>
    );
  }
}

PhoneInput.defaultProps = {

};

PhoneInput.propTypes = {
  cca2: PropTypes.string,
  searchable: PropTypes.bool,
  onChangeCountry: PropTypes.func.isRequired,
  onChangePhoneText: PropTypes.func.isRequired,
  addContacts: PropTypes.bool,
  closeable: PropTypes.bool,
  countries: PropTypes.array.isRequired,
  phoneNumber: PropTypes.string,
  returnKeyType: PropTypes.string,
  next: PropTypes.func,
  blurOnSubmit: PropTypes.func,
  onAddContactsSelect: PropTypes.func,
  error: PropTypes.string,
};

const styles = StyleSheet.create({
  inputWrapper: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(6, true),
    borderBottomWidth: 1,
    borderBottomColor: AUI_COLORS.Slate.hex
  },
  input: {
    flex: 1,
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.semibold,
    color: AUI_COLORS.Charcoal.hex,
    fontSize: AUI_TYPOGRAPHY.typeScale.size16,
    paddingLeft: 9,
    marginTop: -5
  },
  icon: {
    marginTop: 10
  },
  contactIcon: {
    marginTop: 8,
    marginLeft: 13,
    paddingLeft: 13,
    height: 26,
    borderLeftWidth: 1,
    borderLeftColor: AUI_COLORS.Silver.hex
  },
  error: {
    marginTop: 4
  },
  errorText: {
    color: AUI_COLORS.TorchRed.hex
  }
});

export  {
  PhoneInput
}