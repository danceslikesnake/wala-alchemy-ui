import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import {
  Container,
  ImageContainer,
  GradientContainer,
  Subheadline,
  Caption,
  Spacer,
  Icons,
  AUI_COLORS,
  AUI_LAYOUT,
} from '../../../../Elements/index.js';

class ActionCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      headline,
      description,
      onPress,
      denseCopy,
      accentColor,
      image,
      imageAccentOpacity
    } = this.props;

    return (
      <TouchableNativeFeedback onPress={onPress}>
        <Container variation={'card'} style={[AUI_LAYOUT.presets.card, {borderTopWidth: 4, borderTopColor: accentColor}]} actAsRow>
          {image &&
            <ImageContainer source={image} style={{width: denseCopy ? 78 : 91}}>
              <GradientContainer colors={[AUI_COLORS.getRgbaFromHex(accentColor, imageAccentOpacity), AUI_COLORS.getRgbaFromHex(accentColor, 0)]} isFlex />
            </ImageContainer>
          }
          <Spacer horizontal />
          <Container isFlex>
              <Spacer dense={denseCopy}/>
              <Subheadline dense={denseCopy} color={AUI_COLORS.Charcoal.hex}>{headline}</Subheadline>
              <Caption dense={denseCopy}>{description}</Caption>
              <Spacer dense={denseCopy}/>
          </Container>
          <Spacer horizontal />
          <Container style={{borderLeftWidth: 1, borderLeftColor: AUI_COLORS.Silver.hex, width: 32}} alignItems={'center'} justifyContent={'center'}>
            <Icons
              iconName={'chevron-right'}
              iconSet={'font-awesome'}
              iconSize={18}
              iconColor={AUI_COLORS.WalaTeal.hex}
            />
          </Container>
        </Container>
      </TouchableNativeFeedback>
    );
  }
}

ActionCard.defaultProps = {
  denseCopy: false,
  accentColor: AUI_COLORS.WalaTeal.tint2,
  imageAccentOpacity: 0.7
};

ActionCard.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  denseCopy: PropTypes.bool,
  accentColor: PropTypes.string,
  image: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  imageAccentOpacity: PropTypes.number
};

const styles = StyleSheet.create({});

export {
  ActionCard
}