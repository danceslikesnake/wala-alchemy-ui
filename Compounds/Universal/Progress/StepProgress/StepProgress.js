import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {
  Container,
  Headline,
  Caption,
  Divider,
  Spacer,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_TYPOGRAPHY
} from '../../../../Elements/index';
import {
  AUI_FUNCTIONS,
  AUI_CONSTANTS
} from "../../../../Helpers/index";

class StepProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _renderSteps = () => {
    const {
      numberOfSteps,
      currentStep,
      inactiveStepColor,
      activeStepColor
    } = this.props;

    let stepArray = [];

    for(let i = 1; i <= numberOfSteps; i++) {
      let step = <Container
        key={i}
        style={[
          styles.step,
          {backgroundColor: (i === currentStep) ?
              activeStepColor
              : inactiveStepColor
          }]}
        isFlex
      />;
      stepArray.push(step);

      if(i !== numberOfSteps)
        stepArray.push(<Spacer key={i + 'spacer'} horizontal />);
    }

    return stepArray;
  };

  render() {
    const {
      numberOfSteps,
      currentStep
    } = this.props;

    return (
      <Container>
        <Spacer dense />
        <Caption alignCenter dense>{`STEP ${currentStep >= numberOfSteps ? numberOfSteps : currentStep} OF ${numberOfSteps}`}</Caption>
        <Container actAsRow variation={'card'} style={{height: 24}} alignItems={'center'}>
          {this._renderSteps()}
        </Container>
        <Spacer dense />
      </Container>
    );
  }
}

StepProgress.defaultProps = {
  numberOfSteps: 1,
  currentStep: 1,
  inactiveStepColor: AUI_COLORS.CuriousBlue.tint4,
  activeStepColor: AUI_COLORS.CuriousBlue.hex
};

StepProgress.propTypes = {
  numberOfSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  inactiveStepColor: PropTypes.string,
  activeStepColor: PropTypes.string
};

const styles = StyleSheet.create({
  step: {
    height: 4
  }
});

export {
  StepProgress
}