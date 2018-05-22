import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, StyleSheet } from 'react-native';
import Modal from 'react-native-modalbox';
import {
  Container,
  SmallDisplay,
  AUI_COLORS,
  AUI_LAYOUT
} from '../../../../Elements/index';
import {
  AUI_FUNCTIONS
} from "../../../../Helpers/index";

class CategoryHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label } = this.props;

    return (
      <Container
        variation={'wide'}
        style={[localStyles.sectionHeader, AUI_LAYOUT.roundCorners]}
      >
        <SmallDisplay style={{color: 'white'}}>{label}</SmallDisplay>
      </Container>
    );
  }
}

CategoryHeader.propTypes = {
  label: PropTypes.string
};

const localStyles = StyleSheet.create({
  sectionHeader: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(2),
    justifyContent: 'center',
    backgroundColor: AUI_COLORS.Charcoal.getRgba(0.3)
  }
});


export {
  CategoryHeader
}