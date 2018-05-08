import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Container, Subhead1, Caption1, Spacer, AUI_COLORS, AUI_LAYOUT } from '../../../Elements';
import { AUI_CONSTANTS, AUI_FUNCTIONS } from "../../../Helpers";
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {Icons} from "../../";

class CarouselForAccounts extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem({ item, index }) {
    return (
      <Container
        style={[
          AUI_LAYOUT.roundCorners,
          AUI_LAYOUT.elevation2,
          styles.slide
        ]}>
        <Container
          actAsRow
          style={styles.sliderHeader}
        >
          <Container style={{marginRight: AUI_CONSTANTS.gridBase}}>{item.icon}</Container>
          <Caption1 numberOfLines={1} ellipsizeMode={'tail'} style={styles.accountName}>
            {item.accountName}
          </Caption1>
        </Container>
        <Container actAsRow style={styles.accountBalance}>
          <Subhead1>{item.accountBalance}</Subhead1>
        </Container>
      </Container>
    );
  }

  render() {
    const { label, slides, sliderWidth, onSnapToItem } = this.props;

    const sliderContainerWidth = (sliderWidth) ? sliderWidth : AUI_CONSTANTS.deviceWidth - 26;
    return (
      <Container style={{position: 'relative', width: sliderContainerWidth}}>
        {slides.length > 1 && (
          <TouchableNativeFeedback
            onPress={() => {
              this._carousel.snapToPrev();
            }}
          >
            <Container
              style={[
                AUI_CONSTANTS.elevation3,
                styles.sliderButton,
                styles.leftButton
              ]}
            >
              <Icons
                iconSet={'material-design'}
                iconName={'chevron-left'}
                iconSize={24}
                iconColor={AUI_COLORS.WalaTeal.hex}
              />
            </Container>
          </TouchableNativeFeedback>
        )}
        <Caption1 style={{ height: AUI_FUNCTIONS.gridBaseMultiplier(2) }}>{label}</Caption1>
        <Container
          style={[
            AUI_LAYOUT.roundCorners,
            styles.carouselWrapper,
            {
              width: sliderContainerWidth
            }
          ]}>
          <LinearGradient
            colors={[AUI_COLORS.ScampiPurple.getRgba(0.15), AUI_COLORS.ScampiPurple.getRgba(0)]}
            style={[AUI_LAYOUT.roundTopCorners, styles.gradient]}
          />
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={slides}
            renderItem={this._renderItem}
            sliderWidth={sliderContainerWidth}
            sliderHeight={58}
            itemWidth={200}
            itemHeight={58}
            inactiveSlideOpacity={0.5}
            onSnapToItem={onSnapToItem}
          />
        </Container>
        {slides.length > 1 && (
          <TouchableNativeFeedback
            onPress={() => {
              this._carousel.snapToNext();
            }}
          >
            <Container
              style={[
                AUI_CONSTANTS.elevation3,
                styles.sliderButton,
                styles.rightButton
              ]}
            >
              <Icons
                iconSet={'material-design'}
                iconName={'chevron-right'}
                iconSize={24}
                iconColor={AUI_COLORS.WalaTeal.hex}
              />
            </Container>
          </TouchableNativeFeedback>
        )}
        <Spacer />
      </Container>
    );
  }
}

CarouselForAccounts.propTypes = {
  label: PropTypes.string,
  slides: PropTypes.array.isRequired,
  onSnapToItem: PropTypes.func,
  sliderWidth: PropTypes.number
};

const styles = StyleSheet.create({
  carouselWrapper: {
    backgroundColor: AUI_COLORS.Silver.getRgba(0.5),
    height: AUI_FUNCTIONS.gridBaseMultiplier(5)
  },
  gradient: {
    height: 7,
    width: '100%'
  },
  slide: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(4),
    width: 200,
    backgroundColor: 'white'
  },
  accountBalance: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(2),
    paddingLeft: AUI_CONSTANTS.gridBase
  },
  accountName: {
    width: 148,
    lineHeight: 18
  },
  sliderHeader: {
    alignItems: 'center',
    paddingLeft: AUI_CONSTANTS.gridBase,
    paddingTop: 4
  },
  sliderButton: {
    width: AUI_FUNCTIONS.gridBaseMultiplier(3),
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    borderRadius: AUI_FUNCTIONS.gridBaseMultiplier(3) / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3
  },
  leftButton: {
    left: 0 - (AUI_FUNCTIONS.gridBaseMultiplier(3) / 2),
    top: AUI_FUNCTIONS.gridBaseMultiplier(3)
  },
  rightButton: {
    right: 0 - (AUI_FUNCTIONS.gridBaseMultiplier(3) / 2),
    top: AUI_FUNCTIONS.gridBaseMultiplier(3)
  }
});

export {
  CarouselForAccounts
}