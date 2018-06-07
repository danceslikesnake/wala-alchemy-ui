import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import {
  Container,
  Divider,
  Caption1,
  Subhead1,
  Icons,
  Spacer,
  SmallDisplay,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_TYPOGRAPHY
} from '../../../Elements/index';
import {
  AUI_CONSTANTS,
  AUI_FUNCTIONS
} from '../../../Helpers/index';
import Swipeable from 'react-native-swipeable-row';

class MarketTransactionItem extends Component {
  constructor(props) {
    super(props);
  }

  renderRightButtons = (buttons, itemHeight) => {
    const renderedButtons = buttons
      ? buttons.map((btn, idx) => {
        return (
          <TouchableNativeFeedback key={idx} onPress={btn.onPress}>
            <Container
              alignItems={'center'}
              justifyContent={'center'}
              style={[
                { width: itemHeight, height: itemHeight - AUI_CONSTANTS.gridBase },
                AUI_LAYOUT.roundCorners,
                AUI_LAYOUT.elevation2,
                styles.swipeButton,
              ]}>
              <Icons
                iconName={btn.iconName}
                iconSet={btn.iconSet ? btn.iconSet : 'wala'}
                iconColor={
                  btn.buttonType === 'negative'
                    ? AUI_COLORS.TorchRed.tint2
                    : AUI_COLORS.WalaTeal.hex
                }
                iconSize={26}
              />
              <Spacer dense />
              <Caption1
                color={
                  btn.buttonType === 'negative'
                    ? AUI_COLORS.TorchRed.shade2
                    : AUI_COLORS.WalaTeal.shade2
                }>
                {btn.label.toUpperCase()}
              </Caption1>
            </Container>
          </TouchableNativeFeedback>
        );
      })
      : null;

    return [
      <Container
        actAsRow
        alignItems={'center'}
        style={[
          {height: itemHeight},
          styles.swipeButtonTrack,
          AUI_LAYOUT.roundCorners
        ]}
      >
        {renderedButtons}
      </Container>
    ];
  };

  render(){
    const {
      onRef,
      provider,
      productName,
      price,
      statusComponent,
      rightButtons,
      onPress,
      bounceOnMount,
    } = this.props;

    const itemHeight = AUI_FUNCTIONS.gridBaseMultiplier(7);
    const rightSwipeButtons = rightButtons
      ? this.renderRightButtons(rightButtons, itemHeight)
      : null;
    const rightButtonsWidth = itemHeight * rightButtons.length + 8 + 8 * rightButtons.length;

    return(
      <Swipeable
        onRef={onRef}
        bounceOnMount={bounceOnMount}
        rightButtons={rightSwipeButtons}
        rightButtonWidth={rightButtonsWidth}
      >
        <TouchableNativeFeedback onPress={onPress}>
          <Container
            variation={'wide'}
            style={[AUI_LAYOUT.presets.card, { backgroundColor: 'white', marginBottom: 4 }]}>
            <Container
              actAsRow
              alignItems={'center'}
              style={{ height: AUI_FUNCTIONS.gridBaseMultiplier(4) }}>
              <Container isFlex>
                <Caption1 color={AUI_COLORS.Charcoal.hex}>{provider}</Caption1>
                <Subhead1
                  color={AUI_COLORS.Charcoal.hex}
                  ellipsizeMode={'tail'}
                  numberOfLines={1}
                  style={{ marginTop: -4 }}>
                  {productName}
                </Subhead1>
              </Container>
              {statusComponent}
            </Container>
            <Divider extendRightToFillContainer={9} extendLeftToFillContainer={9} />
            <Container
              actAsRow
              alignItems={'center'}
              style={{ height: AUI_FUNCTIONS.gridBaseMultiplier(3) }}>
              <Caption1>{'PRICE'}</Caption1>
              <Subhead1 isFlex alignRight color={AUI_COLORS.Charcoal.hex}>
                {price}
              </Subhead1>
            </Container>
          </Container>
        </TouchableNativeFeedback>
      </Swipeable>
    );
  }
}

MarketTransactionItem.propTypes = {
  provider: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.string,
  statusComponent: PropTypes.element,
  rightButtons: PropTypes.array,
  onPress: PropTypes.func,
  bounceOnMount: PropTypes.bool,
};

const styles = StyleSheet.create({
  swipeButton: {
    borderRadius: 3,
    marginRight: AUI_CONSTANTS.gridBaseDense
  },
  swipeButtonTrack: {
    paddingLeft: 8,
    backgroundColor: AUI_COLORS.getRgbaFromHex(AUI_COLORS.WalaTeal.shade3, 0.5)
  },
});

export {
  MarketTransactionItem
}