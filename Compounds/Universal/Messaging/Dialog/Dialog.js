import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {
  Container,
  Headline,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_TYPOGRAPHY
} from '../../../../Elements/index';
import {
  AUI_FUNCTIONS,
  AUI_CONSTANTS
} from "../../../../Helpers/index";

class Dialog extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {} = this.props;

    return (
      <Container>
        <Headline>Dialog</Headline>
      </Container>
    );
  }
}

Dialog.defaultProps = {};

Dialog.propTypes = {};

const styles = StyleSheet.create({});

export {
  Dialog
}