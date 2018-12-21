import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import {
  Container,
  Spacer,
  Caption,
  AUI_COLORS
} from '../../../../Elements/index';
import {
  AUI_FUNCTIONS
} from "../../../../Helpers/index";
import * as Animatable from 'react-native-animatable';

class LinearProgress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      trackColor,
      indicatorColor,
      percentTextColor,
      percent
    } = this.props;

    const percentText = Math.ceil(percent * 100);

    return (
      <Container actAsRow style={{height: AUI_FUNCTIONS.gridBaseMultiplier(2, true)}} alignItems={'center'}>
        <Container isFlex style={{height: 4, backgroundColor: trackColor, overflow: 'hidden'}}>
          <Animatable.View animation="slideInLeft" easing="ease-out" duration={500}>
            <Container style={{width: percentText + '%', backgroundColor: indicatorColor, height: 4}} />
          </Animatable.View>
        </Container>
        <Spacer horizontal />
        <Caption color={percentTextColor}>{percentText + '%'}</Caption>
      </Container>
    );
  }
}

LinearProgress.defaultProps = {
  trackColor: AUI_COLORS.CuriousBlue.tint4,
  indicatorColor: AUI_COLORS.CuriousBlue.hex,
  percentTextColor: AUI_COLORS.CuriousBlue.hex
};

LinearProgress.propTypes = {
  trackColor: PropTypes.string,
  indicatorColor: PropTypes.string,
  percentTextColor: PropTypes.string,
  percent: PropTypes.number.isRequired
};

const localStyles = StyleSheet.create({

});

export {
  LinearProgress
}