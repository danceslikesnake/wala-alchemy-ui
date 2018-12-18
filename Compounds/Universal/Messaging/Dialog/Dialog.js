import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {
  GradientContainer,
  Container,
  Subheadline,
  Caption,
  TransparentButton,
  Spacer,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_TYPOGRAPHY,
  AUI_FUNCTIONS,
  AUI_CONSTANTS
} from '../../../../index.js';
import Modal from 'react-native-modalbox';

class Dialog extends Component {
  constructor(props) {
    super(props);
  }

  _openDialog = () => {
    this.dialog.open();
  };

  _closeDialog = () => {
    this.dialog.close();
  };

  render() {
    const {
      headline,
      message,
      messageCondition,
      onClosed,
      primaryActionOnPress,
      primaryActionLabel,
      dismissActionOnPress,
      dismissActionLabel
    } = this.props;

    let borderColor = '';
    switch(messageCondition) {
      case 'success':
        borderColor = AUI_COLORS.WalaTeal.hex;
        break;
      case 'failure':
        borderColor = AUI_COLORS.TorchRed.tint2;
        break;
      case 'informational':
      default:
        borderColor = AUI_COLORS.CuriousBlue.tint2;
        break;
    }

    return (
      <Modal
        style={[styles.modal]}
        ref={dialog => this.dialog = dialog}
        coverScreen
        backdropOpacity={0.8}
        backdropColor={AUI_COLORS.Charcoal.getRgba(0.8)}
        onClosed={onClosed ? onClosed : null}
      >
        <Container
          variation={'card'}
          style={[AUI_LAYOUT.presets.card, {borderTopWidth: AUI_CONSTANTS.gridBaseDense, borderTopColor: borderColor}]}
        >
          <Spacer />
          <Container variation={'wide'}>
            <Subheadline color={AUI_COLORS.Charcoal.hex}>{headline}</Subheadline>
            <Spacer dense />
            <Caption>{message}</Caption>
          </Container>
          <Spacer />
          <Container
            actAsRow
            justifyContent={'flex-end'}
          >
            <TransparentButton
              onPress={() => {
                dismissActionOnPress ? dismissActionOnPress() : null;
                this._closeDialog();
              }}
              label={dismissActionLabel}
              variation={'secondary'}
            />
            {primaryActionOnPress &&
              <TransparentButton
                onPress={() => {
                  primaryActionOnPress();
                  this._closeDialog();
                }}
                label={primaryActionLabel}
              />
            }
          </Container>
          <Spacer dense />
        </Container>
      </Modal>
    );
  }
}

Dialog.defaultProps = {
  dismissActionLabel: 'Close',
  messageCondition: 'informational'
};

Dialog.propTypes = {
  headline: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  messageCondition: PropTypes.oneOf(['success', 'failure', 'informational']),
  onClosed: PropTypes.func,
  primaryActionOnPress: PropTypes.func,
  primaryActionLabel: PropTypes.string,
  dismissActionOnPress: PropTypes.func,
  dismissActionLabel: PropTypes.string,
};

const styles = StyleSheet.create({
  modal: {
    height: null,
    backgroundColor: 'transparent'
  }
});

export {
  Dialog
}