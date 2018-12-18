import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import Modal from 'react-native-modal';
import {
  GradientContainer,
  Container,
  Headline,
  Caption,
  BodyText,
  Logomark,
  Display,
  CallToActionButton,
  Icons,
  Spacer,
  AUI_COLORS,
  AUI_LAYOUT,
} from '../../../index.js';

function EarnPayoutMessage({
  opportunityTitle,
  opportunityDescription,
  dalaAmount,
  callToActionLabel,
  callToActionOnPress,
  renderAdditionalContent,
  isOpen,
  onClose,
}) {
  return (
    <Modal
      isVisible={isOpen}
      animationIn={'slideInDown'}
      animationOut={'slideOutUp'}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onDismiss={onClose}
      backdropColor={AUI_COLORS.Charcoal.hex}
      backdropopacity={0.8}
      style={styles.modal}
    >
      <Container
        variation={'card'}
        style={[AUI_LAYOUT.presets.card, { overflow: 'hidden' }]}
      >
        <GradientContainer
          colors={[AUI_COLORS.WalaTeal.hex, AUI_COLORS.ScampiPurple.hex]}
          gradientDirection={'vertical'}
          style={{ overflow: 'hidden' }}
        >
          <Image
            source={require('./logomarkBG.png')}
            style={styles.logomarkBG}
          />
          <TouchableNativeFeedback onPress={onClose}>
            <Container
              justifyContent={'center'}
              alignItems={'center'}
              style={styles.closeButton}
            >
              <Icons
                iconName={'times'}
                iconSet={'font-awesome'}
                iconSize={26}
                iconColor={AUI_COLORS.WalaTeal.tint4}
              />
            </Container>
          </TouchableNativeFeedback>
          <Container variation={'card'} alignItems={'center'}>
            <Caption
              alignCenter
              color={AUI_COLORS.getRgbaFromHex('white', 0.7)}
              style={styles.smallHeaderText}
            >
              {"YOU'VE EARNED DALA"}
            </Caption>
            <Display dense alignCenter color={'white'}>
              {opportunityTitle}
            </Display>
            <BodyText alignCenter color={'white'} dense>
              {opportunityDescription}
            </BodyText>
            <Spacer />
            <Logomark variation={'logomarkDala'} imgHeight={52} />
            <Headline color={'white'} alignCenter>
              {dalaAmount}
            </Headline>
            <Spacer />
          </Container>
          {renderAdditionalContent && renderAdditionalContent}
        </GradientContainer>
        <Spacer />
        <Container variation={'card'}>
          <CallToActionButton
            onPress={callToActionOnPress}
            label={callToActionLabel}
            addArrow
          />
        </Container>
        <Spacer />
      </Container>
    </Modal>
  );
}

EarnPayoutMessage.defaultProps = {
  opportunityTitle: 'Opportunity Title',
  opportunityDescription: 'Opportunity Description',
  dalaAmount: 'đ 0.00000000',
  callToActionLabel: 'Primary CTA',
};

EarnPayoutMessage.propTypes = {
  opportunityTitle: PropTypes.string.isRequired,
  opportunityDescription: PropTypes.string.isRequired,
  dalaAmount: PropTypes.string.isRequired,
  callToActionOnPress: PropTypes.func.isRequired,
  callToActionLabel: PropTypes.string,
  renderAdditionalContent: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

const styles = StyleSheet.create({
  modal: {
    marginLeft: 0,
    marginRight: 0,
  },
  logomarkBG: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.15,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    zIndex: 5,
  },
  smallHeaderText: {
    lineHeight: 48,
    marginBottom: -8,
  },
});

export { EarnPayoutMessage };
