import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Container, Subhead1, Caption1, Spacer, WA_COLORS, WA_LAYOUT } from '../../../Elements';
import { AUI_CONSTANTS, AUI_FUNCTIONS } from "../../../Helpers";
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {AUI_COLORS} from "../../Colors";

class SliderForAccounts extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem({ item, index }) {
    return (
      <Container
        style={[
          WA_LAYOUT.roundCorners,
          WA_LAYOUT.elevation2,
          styles.slide
        ]}>
        <Container
          actAsRow
          style={styles.sliderHeader}
        >
          <Container>{item.icon}</Container>
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
      <Container>
        <Caption1 style={{ height: AUI_FUNCTIONS.verticalRhythm(2) }}>{label}</Caption1>
        <Container
          style={[
            WA_LAYOUT.roundCorners,
            styles.carouselWrapper
          ]}>
          <LinearGradient
            colors={[WA_COLORS.ScampiPurple.getRgba(0.15), WA_COLORS.ScampiPurple.getRgba(0)]}
            style={[WA_LAYOUT.roundTopCorners, styles.gradient]}
          />
          <Carousel
            data={slides}
            renderItem={this._renderItem}
            sliderWidth={sliderContainerWidth}
            sliderHeight={58}
            itemWidth={200}
            itemHeight={58}
            inactiveSlideOpacity={0.4}
            onSnapToItem={onSnapToItem}
          />
        </Container>
                                 <Spacer />
      </Container>
    );
  }
}

SliderForAccounts.propTypes = {
  label: PropTypes.string,
  slides: PropTypes.array.isRequired,
  onSnapToItem: PropTypes.func,
  sliderWidth: PropTypes.number
};

const styles = StyleSheet.create({
  carouselWrapper: {
    backgroundColor: AUI_COLORS.Silver.getRgba(0.5),
    height: AUI_FUNCTIONS.verticalRhythm(5)
  },
  gradient: {
    height: 7,
    width: '100%'
  },
  slide: {
    height: AUI_FUNCTIONS.verticalRhythm(4),
    width: 200,
    backgroundColor: 'white'
  },
  accountBalance: {
    height: AUI_FUNCTIONS.verticalRhythm(2),
    paddingLeft: AUI_CONSTANTS.verticalRhythm
  },
  accountName: {
    width: 148,
    lineHeight: 18
  },
  sliderHeader: {
    alignItems: 'center',
    paddingLeft: AUI_CONSTANTS.verticalRhythm,
    paddingTop: 4
  }
});

export {
  SliderForAccounts
}