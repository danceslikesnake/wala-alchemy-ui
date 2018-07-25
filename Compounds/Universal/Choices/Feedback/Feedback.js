import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import {
  Container,
  Caption,
  SmallDisplay,
  Icons,
  Divider,
  Spacer,
  CallToActionButton,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_TYPOGRAPHY
} from '../../../../Elements/index';
import {
  AUI_CONSTANTS,
  AUI_FUNCTIONS
} from '../../../../Helpers/index';
import Modal from 'react-native-modalbox';
import * as Animatable from 'react-native-animatable';

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

  _setModalHeight = event => {
    if (this.state.trackModalOnLayout) {
      this.setState({
        trackModalOnLayout: false,
        modalFinalHeight: event.nativeEvent.layout.height,
        headerPosition: 'absolute'
      });
    }
  };

  _trackDescriptionHeight = event => {
    if (this.state.trackDescriptionOnLayout) {
      this.setState({
        trackDescriptionOnLayout: false,
        descriptionFinalHeight: event.nativeEvent.layout.height,
        headerY: event.nativeEvent.layout.height
      });
    }
  };

  _feedbackControl = () => {
    if(!this.state.descriptionVisible)
      this._openFeedbackDescription();
    else
      this._closeFeedbackDescription();
  };

  _openFeedbackDescription = () => {
    this.feedbackDescription.transition({top: this.state.descriptionFinalHeight}, {top: 0}, 200, 'ease-out');
    this.setState({descriptionVisible: true});
  };

  _closeFeedbackDescription = () => {
    this.feedbackDescription.transition({top: 0}, {top: this.state.descriptionFinalHeight}, 200, 'ease-out');
    this.setState({descriptionVisible: false});
  };

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
            <Caption color={this.state['id' + choice.choiceId + 'Selected'] ? AUI_COLORS.WalaTeal.hex : AUI_COLORS.Charcoal.hex}>{choice.choiceText}</Caption>
          </Container>
        </TouchableNativeFeedback>
      );
    });
  };

  render() {
    const {
      headerText,
      headerDescription,
      choices,
      callToActionDisabledText,
      callToActionActiveText,
      callToActionOnPress
    } = this.props;

    const feedbackChoices = choices ? this._renderChoices(choices) : null;
    return (
      <Modal
        style={[localStyles.bottomSheet, {height: this.state.modalFinalHeight}]}
        position={'bottom'}
        ref={feedback => this.feedback = feedback}
        coverScreen
        backdropOpacity={0.8}
        backdropColor={AUI_COLORS.Charcoal.getRgba(0.8)}
        onClosed={() => {this._resetAll();}}
      >
        <Container
          onLayout={this.state.trackModalOnLayout ? (nativeEvent) => {
            this._setModalHeight(nativeEvent);
          } : null}
        >
          <Animatable.View
            style={[
              localStyles.headerWrapper,
              {position: this.state.headerPosition, top: this.state.headerY}
              ]}
            ref={feedbackDescription => this.feedbackDescription = feedbackDescription}
          >
            <Container
              actAsRow
              alignItems={'center'}
              style={localStyles.header}
            >
              <SmallDisplay isFlex color={'white'}>{headerText}</SmallDisplay>
              <TouchableNativeFeedback onPress={() => {this._feedbackControl();}}>
                <Container
                  style={localStyles.headerButton}
                  justifyContent={'flex-end'}
                  alignItems={'center'}
                >
                  <SmallDisplay
                    color={AUI_COLORS.CuriousBlue.tint4}
                    style={{lineHeight: 13}}>
                    {this.state.descriptionVisible ? 'ok!' : 'why?'}
                  </SmallDisplay>
                  <Icons
                    iconName={'keyboard-arrow-down'}
                    iconSet={'material-design'}
                    iconColor={AUI_COLORS.CuriousBlue.tint4}
                    iconSize={16}
                    containerStyles={{marginTop: -4}}
                  />
                </Container>
              </TouchableNativeFeedback>
            </Container>
            <Container
              onLayout={this.state.trackDescriptionOnLayout ? (nativeEvent) => {
                this._trackDescriptionHeight(nativeEvent);
              } : null}
              style={localStyles.headerDescription}
            >
              <Caption color={'white'}>{headerDescription}</Caption>
            </Container>
          </Animatable.View>
          <Container
            style={[
              localStyles.contentWrapper,
              !this.state.trackModalOnLayout ? {marginTop: this.state.descriptionFinalHeight + AUI_FUNCTIONS.gridBaseMultiplier(3)} : null
            ]}
          >
            {feedbackChoices}
            <Divider size={'small'}/>
            <Spacer/>
            <Container variation={'card'}>
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
  headerDescription: PropTypes.string,
  choices: PropTypes.array.isRequired,
  callToActionDisabledText: PropTypes.string,
  callToActionActiveText: PropTypes.string,
  callToActionOnPress: PropTypes.func
};

const localStyles = StyleSheet.create({
  bottomSheet: {
    position: 'relative',
    backgroundColor: 'transparent'
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
    zIndex: 5,
    width: '100%'
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