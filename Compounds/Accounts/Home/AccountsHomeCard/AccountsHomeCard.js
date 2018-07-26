import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import {
  Container,
  ImageContainer,
  GradientContainer,
  Spacer,
  Subheadline,
  Headline,
  Caption,
  AUI_COLORS,
  AUI_LAYOUT
} from '../../../../Elements/index';
import {
  TileActions
} from '../../../../Compounds/index';
import {
  AUI_CONSTANTS,
  AUI_FUNCTIONS
} from "../../../../Helpers/index";

class AccountsHomeCard extends Component {
  constructor(props) {
    super(props);
  }

  _renderAccountDetails = (hasBackground) => {
    const {
      accountName,
      accountBalance,
      accountConvertedBalance,
      accountBranding,
      isBadState
    } = this.props;

    if(isBadState) {
      return(
        <Container>

        </Container>
      );
    } else {
      return(
        <Container>
          <Container actAsRow style={{marginBottom: -8}}>
            <Subheadline color={hasBackground ? 'white' : AUI_COLORS.Charcoal.tint1} isFlex dense>{accountName}</Subheadline>
            {accountBranding}
          </Container>
          <Headline color={hasBackground ? 'white' : AUI_COLORS.Charcoal.hex} style={{marginBottom: -4}}>{accountBalance}</Headline>
          {accountConvertedBalance && (
            <Caption color={hasBackground ? AUI_COLORS.Charcoal.tint4 : AUI_COLORS.Slate.hex}>
              {'≈ ' + accountConvertedBalance}
            </Caption>
          )}
        </Container>
      );
    }
  };

  render() {
    const {
      accountBrandingBackgroundImage,
      accountOptions
    } = this.props;

    return (
      <Container variation={'card'} style={[AUI_LAYOUT.presets.card]}>
        {accountBrandingBackgroundImage ? (
          <ImageContainer source={accountBrandingBackgroundImage} style={[AUI_LAYOUT.roundTopCorners, {overflow: 'hidden'}]}>
            <GradientContainer
              colors={[AUI_COLORS.Charcoal.getRgba(1), AUI_COLORS.ScampiPurple.getRgba(0)]}
              style={[AUI_LAYOUT.roundTopCorners, {paddingHorizontal: AUI_CONSTANTS.gridBase}]}
            >
              <Spacer dense />
              {this._renderAccountDetails(true)}
              <Spacer dense />
            </GradientContainer>
          </ImageContainer>
        ) : (
          <Container style={{paddingHorizontal: AUI_CONSTANTS.gridBase}}>
            <Spacer dense />
            {this._renderAccountDetails()}
            <Spacer dense />
          </Container>
        )}
        {accountOptions &&
          <Container style={{borderTopWidth: 4, borderTopColor: AUI_COLORS.ScampiPurple.hex}}>
            <TileActions
              tiles={accountOptions}
              dense
            />
          </Container>
        }
      </Container>
    );
  }
}

AccountsHomeCard.defaultProps = {

};

AccountsHomeCard.propTypes = {
  accountName: PropTypes.string,
  accountBalance: PropTypes.string,
  accountConvertedBalance: PropTypes.string,
  accountBranding: PropTypes.element,
  accountBrandingBackgroundImage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  accountOptions: PropTypes.array,
  isBadState: PropTypes.bool
};

const localStyles = StyleSheet.create({

});

export {
  AccountsHomeCard
}