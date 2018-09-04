import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableNativeFeedback} from 'react-native';
import {
  Container,
  Caption,
  Subheadline,
  Divider,
  Spacer,
  CallToActionButton,
  AUI_COLORS,
} from '../../../../Elements/index';
import {
  AUI_CONSTANTS,
  AUI_FUNCTIONS
} from '../../../../Helpers/index';
import Modal from 'react-native-modalbox';

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      trackModalOnLayout: true,
      trackDescriptionOnLayout: true,
      modalFinalHeight: null,
      descriptionFinalHeight: null,
      headerY: 0,
      headerPosition: 'relative',
      descriptionVisible: false,
      choiceItemActive: null,
      selectedChoice: null
    };
  }

  componentWillMount(){
    if(this.props.choices) {
      this.props.choices.map((choice, idx) => {
        let addVar = {};
        addVar['id' + choice.choiceId + 'Selected'] = false;
        this.setState(addVar);
      });
    }
  }

  componentWillUnmount(){
    this._resetAll();
  }

  _openFeedback() {
    this.feedback.open();
  }

  _closeFeedback() {
    this.feedback.close();
  }

  _resetChoices = () => {
    this.props.choices.map((choice, idx) => {
      let resetVar = {};
      resetVar['id' + choice.choiceId + 'Selected'] = false;
      this.setState(resetVar);
    });
  };

  _resetAll = () => {
    this._resetChoices();
    this.setState({selectedChoice: false, choiceItemActive: false, descriptionVisible: false});
  };

  _renderChoices = (choices) => {
    return choices.map((choice, idx) => {
      return (
        <TouchableNativeFeedback
          key={choice.choiceId}
          onPress={() => {
            this._resetChoices();

            let updateVar = {};
            updateVar['id' + choice.choiceId + 'Selected'] = true;
            this.setState(updateVar);
            this.setState({selectedChoice: choice.choiceId});
          }}
        >
          <Container
            style={[
              localStyles.feedbackItem,
              {borderLeftColor: this.state['id' + choice.choiceId + 'Selected'] ? AUI_COLORS.WalaTeal.hex : 'white'}
              ]}
          >
            <Caption color={this.state['id' + choice.choiceId + 'Selected'] ? AUI_COLORS.WalaTeal.hex : AUI_COLORS.Slate.hex}>{choice.choiceText}</Caption>
          </Container>
        </TouchableNativeFeedback>
      );
    });
  };

  render() {
    const {
      headerText,
      choices,
      callToActionDisabledText,
      callToActionActiveText,
      callToActionOnPress
    } = this.props;

    const feedbackChoices = choices ? this._renderChoices(choices) : null;
    return (
      <Modal
        style={[localStyles.bottomSheet]}
        position={'bottom'}
        ref={feedback => this.feedback = feedback}
        coverScreen
        backdropOpacity={0.8}
        backdropColor={AUI_COLORS.Charcoal.getRgba(0.8)}
        onClosed={() => {this._resetAll();}}
      >
        <Container style={[localStyles.contentWrapper]} variation={'card'}>
          <Container style={{height: AUI_FUNCTIONS.gridBaseMultiplier(5)}} justifyContent={'center'}>
            <Subheadline alignCenter color={AUI_COLORS.Charcoal.hex} style={{paddingHorizontal: AUI_CONSTANTS.gridBase}}>{headerText}</Subheadline>
          </Container>
          <Divider />
          {feedbackChoices}
          <Spacer/>
          <Container variation={'card'}>
            <Spacer />
            <CallToActionButton
              onPress={() => {
                if(this.state.selectedChoice) {
                  callToActionOnPress(this.state.selectedChoice);
                  this._resetAll();
                }
              }}
              label={this.state.selectedChoice ? callToActionActiveText : callToActionDisabledText}
              variation={this.state.selectedChoice ? 'primary' : 'disabled'}
            />
          </Container>
          <Spacer/>
        </Container>
      </Modal>
    );
  }
}

Feedback.defaultProps = {
  headerText: 'Feedback',
  callToActionDisabledText: 'Choose a response...',
  callToActionActiveText: 'Give Feedback'
};

Feedback.propTypes = {
  headerText: PropTypes.string,
  choices: PropTypes.array.isRequired,
  callToActionDisabledText: PropTypes.string,
  callToActionActiveText: PropTypes.string,
  callToActionOnPress: PropTypes.func
};

const localStyles = StyleSheet.create({
  bottomSheet: {
    position: 'relative',
    backgroundColor: 'transparent',
    height: null
  },
  headerWrapper: {
    backgroundColor: AUI_COLORS.CuriousBlue.hex,
    zIndex: 3
  },
  header: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    paddingLeft: AUI_CONSTANTS.gridBase
  },
  headerButton: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    paddingHorizontal: AUI_CONSTANTS.gridBase,
    backgroundColor: AUI_COLORS.CuriousBlue.tint1
  },
  headerDescription: {
    backgroundColor: AUI_COLORS.CuriousBlue.tint1,
    padding: AUI_CONSTANTS.gridBase
  },
  contentWrapper: {
    backgroundColor: 'white',
    borderTopWidth: 8,
    borderTopColor: AUI_COLORS.CuriousBlue.tint2,
    borderRadius: 3,
    elevation: 4,
    marginBottom: AUI_CONSTANTS.gridBase
  },
  feedbackItem: {
    padding: AUI_CONSTANTS.gridBase,
    borderLeftWidth: 4,
    borderBottomWidth: 1,
    borderBottomColor: AUI_COLORS.Silver.hex
  }
});

export  {
  Feedback
}