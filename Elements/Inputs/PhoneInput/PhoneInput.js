import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Container, Caption1, Spacer, AUI_COLORS, AUI_LAYOUT, AUI_TYPOGRAPHY } from '../../../Elements';
import { AUI_FUNCTIONS } from "../../../Helpers";

import CountryPicker from 'react-native-country-picker-modal';
import {Icons} from "../../";

class PhoneInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      cca2,
      onChangeCountry,
      searchable,
      countries,
      phoneNumber,
      onChangePhoneText,
      returnKeyType,
      next,
      blurOnSubmit,
      addContacts,
      onAddContactsSelect
    } = this.props;

    return (
      <Container>
        <Caption1>{'Mobile Phone'}</Caption1>
        <Container
          actAsRow={cca2 ? true : false}
          style={styles.inputWrapper}
        >
          <CountryPicker
            cca2={cca2}
            searchable={searchable}
            showLetters
            phoneSelector
            enableEmptySections
            requiredCountries={countries}
            onChange={(value) => {
              onChangeCountry(value);
            }}
            pickerIcon={<Icons
              variation={'material-design'}
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
              variation={'material-design'}
              iconName={'phone'}
              iconSize={26}
              iconColor={AUI_COLORS.WalaTeal.hex}
            />
          </TouchableOpacity>
          {addContacts && (
            <Container>
              <TouchableOpacity
                style={styles.contactIcon}
                onPress={() => {onAddContactsSelect();}}
              >
                <Icons
                  variation={'material-design'}
                  iconName={'contacts'}
                  iconSize={26}
                  iconColor={AUI_COLORS.WalaTeal.hex}
                />
              </TouchableOpacity>
            </Container>
          )}
        </Container>
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
  addContacts: PropTypes.bool
};

const styles = StyleSheet.create({
  inputWrapper: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(6, true),
    borderBottomWidth: 1,
    borderBottomColor: AUI_COLORS.Iron.hex
  },
  input: {
    flex: 1,
    fontFamily: AUI_TYPOGRAPHY.ProiximaNova.semibold,
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
  }
});

export  {
  PhoneInput
}