import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import {
  Container,
  GradientContainer,
  Spacer,
  SmallDisplay,
  Caption,
  Icons,
  AUI_COLORS
} from '../../../../index.js';
import * as Animatable from 'react-native-animatable';

class Bubble extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dismissed: false,
      trackBubbleHeight: true,
      bubbleHeight: 0
    };
  }

  handleViewRef = ref => this.view = ref;

  _dismissBubble = () => this.view.fadeOut(250).then(endState => this._shrinkView());

  _shrinkView = () => {
    this.view.transition({height: this.state.bubbleHeight}, {height: 0}, 200, 'ease-out');
    if(this.props.dismissedOnPress)
      this.props.dismissedOnPress();
  };

  _setContainerHeight = event => {
    if (this.state.trackBubbleHeight) {
      this.setState({
        trackBubbleHeight: false,
        bubbleHeight: event.nativeEvent.layout.height
      });
    }
  };

  render() {
    const {
      headline,
      message,
      canBeDismissed,
      dismissedOnPress
    } = this.props;

    return (
      <Animatable.View
        ref={this.handleViewRef}
        onLayout={(canBeDismissed && this.state.trackBubbleHeight) ? (nativeEvent) => {
          this._setContainerHeight(nativeEvent);
        } : null}
      >
        <GradientContainer
          style={styles.bubble}
          colors={[AUI_COLORS.CuriousBlue.tint2, AUI_COLORS.CuriousBlue.hex]}
          gradientDirection={'vertical'}
        >
          {canBeDismissed &&
            <TouchableNativeFeedback onPress={this._dismissBubble}>
              <Container
                justifyContent={'center'}
                alignItems={'center'}
                style={styles.button}
              >
                <Icons
                  iconName={'close'}
                  iconSize={16}
                  iconColor={AUI_COLORS.CuriousBlue.tint4}
                  iconSet={'material-design'}
                />
              </Container>
            </TouchableNativeFeedback>
          }
          <Spacer />
          <SmallDisplay alignCenter color={'white'}>{headline}</SmallDisplay>
          <Caption color={'white'} alignCenter>{message}</Caption>
          <Spacer />
        </GradientContainer>
        <Container style={styles.triangleElement} />
        <Spacer dense />
      </Animatable.View>
    );
  }
}

Bubble.propTypes = {
  headline: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  canBeDismissed: PropTypes.bool,
  dismissedOnPress: PropTypes.func
};

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 3,
    elevation: 8,
    paddingHorizontal: 13,
    position: 'relative'
  },
  triangleElement: {
    width: 0,
    height: 0,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    elevation: 8,
    borderBottomColor: AUI_COLORS.CuriousBlue.hex,
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    transform: [
      {rotate: '180deg'}
    ]
  },
  button: {
    width: 26,
    height: 26,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    backgroundColor: AUI_COLORS.CuriousBlue.getRgba(0.76),
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10
  }
});

export {
  Bubble
}