import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import {
  Container,
  Headline,
  Caption,
  Spacer,
  Divider,
  Subheadline,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_TYPOGRAPHY
} from '../../../../Elements/index';
import {
  AUI_FUNCTIONS,
  AUI_CONSTANTS
} from "../../../../Helpers/index";

class RadioButtonGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount(){
    if(this.props.choices) {
      this.props.choices.map((choice, idx) => {
        let addVar = {};
        addVar[idx + '_selected'] = choice.preSelected;
        this.setState(addVar);
      });
    }
  }

  _resetChoices = () => {
    this.props.choices.map((choice, idx) => {
      let resetVar = {};
      resetVar[idx + '_selected'] = false;
      this.setState(resetVar);
    });
  };

  _renderChoices = (choices) => {
    return choices.map((choice, idx) => {
      let addDivider = choices.length !== (idx + 1);
      let isChoiceSelected = this.state[idx + '_selected'];
      return(
        <Container key={idx}>
          <TouchableNativeFeedback onPress={() => {
            this._resetChoices();

            let updateVar = {};
            updateVar[idx + '_selected'] = true;
            this.setState(updateVar);
            this.props.onSelectChoice(choice);
          }}>
            <Container
              actAsRow
              alignItems={'center'}
              style={[
                styles.choiceWrapper,
                isChoiceSelected ? styles.choiceSelectedBorder : null
              ]}
            >
              <Spacer horizontal />
              <Container style={isChoiceSelected ? styles.choiceCircleSelected : styles.choiceCircleUnselected} />
              <Spacer horizontal />
              <Container isFlex>
                <Subheadline style={{marginBottom: -4}} color={AUI_COLORS.Charcoal.hex}>{choice.label}</Subheadline>
                {choice.caption &&
                <Caption>{choice.caption}</Caption>
                }
              </Container>
            </Container>
          </TouchableNativeFeedback>
          {addDivider &&
            <Divider/>
          }
        </Container>
      );
    });
  };

  render() {
    const {
      label,
      choices
    } = this.props;

    return (
      <Container>
        <Caption>{label}</Caption>
        <Spacer dense />
        <Container style={styles.wrapper}>
          {this._renderChoices(choices)}
        </Container>
        <Spacer />
      </Container>
    );
  }
}

RadioButtonGroup.defaultProps = {};

RadioButtonGroup.propTypes = {
  label: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  onSelectChoice: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 3,
    elevation: 1,
    marginHorizontal: 1,
    borderWidth: 1,
    borderColor: AUI_COLORS.Iron.hex
  },
  choiceWrapper: {
    minHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)
  },
  choiceCircleUnselected: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: AUI_COLORS.Iron.hex
  },
  choiceCircleSelected: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: AUI_COLORS.WalaTeal.hex
  },
  choiceSelectedBorder: {
    borderRightWidth: 4,
    borderRightColor: AUI_COLORS.WalaTeal.hex
  }
});

export {
  RadioButtonGroup
}