import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import {
  AUI_COLORS,
  AUI_LAYOUT,
  Caption,
  Container,
  Divider,
  Icons,
  Spacer,
  Subheadline,
} from '../../../Elements/index';
import { AUI_CONSTANTS, AUI_FUNCTIONS } from '../../../Helpers/index';
import Swipeable from 'react-native-swipeable-row';

class MarketTransactionItem extends Component {
  constructor(props) {
    super(props);
  }

  renderRightButtons = (buttons, itemHeight, itemWidth) => {
    const renderedButtons = buttons
      ? buttons.map((btn, idx) => {
        return (
          <TouchableNativeFeedback key={idx} onPress={btn.onPress}>
            <Container
              alignItems={'center'}
              justifyContent={'center'}
              style={[
                {
                  width: itemWidth,
                  height: itemHeight - AUI_CONSTANTS.gridBase,
                },
                AUI_LAYOUT.roundCorners,
                AUI_LAYOUT.elevation2,
                styles.swipeButton,
              ]}
            >
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
              <Caption
                color={
                  btn.buttonType === 'negative'
                    ? AUI_COLORS.TorchRed.shade2
                    : AUI_COLORS.WalaTeal.shade2
                }
              >
                {btn.label.toUpperCase()}
              </Caption>
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
          { height: itemHeight },
          styles.swipeButtonTrack,
          AUI_LAYOUT.roundCorners,
        ]}
      >
        {renderedButtons}
      </Container>,
    ];
  };

  render() {
    const {
      onRef,
      provider,
      productName,
      price,
      statusComponent,
      swipeActions,
      onPress,
      bounceOnMount,
    } = this.props;

    const itemHeight = AUI_FUNCTIONS.gridBaseMultiplier(7);
    const itemWidth =
      swipeActions && swipeActions.length > 2
        ? AUI_FUNCTIONS.gridBaseMultiplier(5)
        : itemHeight;
    const rightSwipeButtons = swipeActions
      ? this.renderRightButtons(swipeActions, itemHeight, itemWidth)
      : null;
    const rightButtonsWidth = swipeActions
      ? itemWidth * swipeActions.length + 8 + 8 * swipeActions.length
      : null;

    return (
      <Swipeable
        onRef={onRef}
        bounceOnMount={bounceOnMount}
        rightButtons={rightSwipeButtons}
        rightButtonWidth={rightButtonsWidth}
      >
        <TouchableNativeFeedback onPress={onPress}>
          <Container
            variation={'wide'}
            style={[
              AUI_LAYOUT.presets.card,
              { backgroundColor: 'white', marginBottom: 4 },
            ]}
          >
            <Container
              actAsRow
              alignItems={'center'}
              style={{ height: AUI_FUNCTIONS.gridBaseMultiplier(4) }}
            >
              <Container isFlex>
                <Caption color={AUI_COLORS.Charcoal.hex}>{provider}</Caption>
                <Subheadline
                  color={AUI_COLORS.Charcoal.hex}
                  ellipsizeMode={'tail'}
                  numberOfLines={1}
                  style={{ marginTop: -4 }}
                >
                  {productName}
                </Subheadline>
              </Container>
              {statusComponent}
            </Container>
            <Divider
              extendRightToFillContainer={9}
              extendLeftToFillContainer={9}
            />
            <Container
              actAsRow
              alignItems={'center'}
              style={{ height: AUI_FUNCTIONS.gridBaseMultiplier(3) }}
            >
              <Caption>{'PRICE'}</Caption>
              <Subheadline isFlex alignRight color={AUI_COLORS.Charcoal.hex}>
                {price}
              </Subheadline>
            </Container>
          </Container>
        </TouchableNativeFeedback>
      </Swipeable>
    );
  }
}

MarketTransactionItem.propTypes = {
  provider: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  statusComponent: PropTypes.element,
  swipeActions: PropTypes.array,
  bounceOnMount: PropTypes.bool,
};

const styles = StyleSheet.create({
  swipeButton: {
    borderRadius: 3,
    marginRight: AUI_CONSTANTS.gridBaseDense,
  },
  swipeButtonTrack: {
    paddingLeft: 8,
    backgroundColor: AUI_COLORS.getRgbaFromHex(AUI_COLORS.WalaTeal.shade3, 0.5),
  },
});

export { MarketTransactionItem };