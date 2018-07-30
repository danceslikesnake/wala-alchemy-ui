import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Linking } from 'react-native';
import {
  Container,
  ImageContainer,
  GradientContainer,
  Spacer,
  Subheadline,
  Headline,
  Caption,
  Icons,
  Divider,
  TransparentButton,
  AUI_COLORS,
  AUI_LAYOUT
} from '../../../Elements/index';
import {
  TileActions
} from '../../index';
import {
  AUI_CONSTANTS,
} from "../../../Helpers/index";

class AccountsHomeCard extends Component {
  constructor(props) {
    super(props);
  }

  handleEmailPress = () => {
    Linking.openURL('mailto:info@getwala.com');
  };

  _renderAccountDetails = (hasBackground) => {
    const {
      accountName,
      accountBalance,
      accountConvertedBalance,
      branding,
      isBadState,
      isBadStateHeadline,
      isBadStateDescription,
      isBadStateButtonLabel,
      isBadStateOnPress
    } = this.props;

    if(isBadState) {
      return(
        <Container>
          <Spacer dense />
          <Container actAsRow>
            <Icons
              iconName={'warning'}
              iconSet={'material-design'}
              iconSize={26}
              iconColor={AUI_COLORS.PoppyYellow.hex}
            />
            <Spacer horizontal/>
            <Container isFlex>
              <Subheadline color={AUI_COLORS.Charcoal.tint1} dense>{isBadStateHeadline}</Subheadline>
              <Caption>{isBadStateDescription}</Caption>
            </Container>
          </Container>
          <Spacer />
          <Divider/>
          <Container actAsRow justifyContent={'flex-end'} style={{marginRight: -13}}>
            <TransparentButton onPress={isBadStateOnPress ? isBadStateOnPress : this.handleEmailPress} label={isBadStateButtonLabel}/>
          </Container>
        </Container>
      );
    } else {
      return(
        <Container>
          <Spacer dense />
          <Container actAsRow style={{marginBottom: -8}}>
            <Subheadline color={hasBackground ? 'white' : AUI_COLORS.Charcoal.tint1} isFlex dense>{accountName}</Subheadline>
            {branding}
          </Container>
          <Headline color={hasBackground ? 'white' : AUI_COLORS.Charcoal.hex} style={{marginBottom: -4}}>{accountBalance}</Headline>
          {accountConvertedBalance && (
            <Caption color={hasBackground ? AUI_COLORS.Charcoal.tint4 : AUI_COLORS.Slate.hex}>
              {accountConvertedBalance}
            </Caption>
          )}
          <Spacer dense />
        </Container>
      );
    }
  };

  render() {
    const {
      brandingBgImage,
      accountOptions,
      renderAdditionalContent,
      isBadState
    } = this.props;

    return (
      <Container variation={'card'} style={[AUI_LAYOUT.presets.card, {overflow: 'hidden'},  isBadState ? localStyles.badState : null]}>
        {brandingBgImage ? (
          <ImageContainer source={brandingBgImage} style={[AUI_LAYOUT.roundTopCorners]}>
            <GradientContainer
              colors={[AUI_COLORS.Charcoal.getRgba(0.5), AUI_COLORS.ScampiPurple.getRgba(0.15)]}
              style={[AUI_LAYOUT.roundTopCorners, {paddingHorizontal: AUI_CONSTANTS.gridBase}]}
            >
              {this._renderAccountDetails(true)}
              {(renderAdditionalContent && !isBadState) &&
                <Container>
                  {renderAdditionalContent()}
                  <Spacer dense />
                </Container>
              }
            </GradientContainer>
          </ImageContainer>
        ) : (
          <Container style={{paddingHorizontal: AUI_CONSTANTS.gridBase}}>
            {this._renderAccountDetails()}
            {(renderAdditionalContent && !isBadState) ? renderAdditionalContent() : null}
          </Container>
        )}
        {(accountOptions && !isBadState) &&
        <Container style={{borderTopWidth: 4, borderTopColor: AUI_COLORS.ScampiPurple.hex}}>
          <TileActions
            tiles={accountOptions}
            rowCount={accountOptions.length}
            dense
          />
        </Container>
        }
      </Container>
    );
  }
}

AccountsHomeCard.defaultProps = {
  isBadStateHeadline: 'Oops!',
  isBadStateDescription: 'Something has gone wrong with this feature! Please let us know about this by emailing info@getwala.com',
  isBadStateButtonLabel: 'Email Us'
};

AccountsHomeCard.propTypes = {
  accountName: PropTypes.string,
  accountBalance: PropTypes.string,
  accountConvertedBalance: PropTypes.string,
  branding: PropTypes.element,
  brandingBgImage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  renderAdditionalContent: PropTypes.func,
  accountOptions: PropTypes.array,
  isBadState: PropTypes.bool,
  isBadStateHeadline: PropTypes.string,
  isBadStateDescription: PropTypes.string,
  isBadStateButtonLabel: PropTypes.string,
  isBadStateOnPress: PropTypes.func
};

const localStyles = StyleSheet.create({
  badState: {
    borderTopWidth: 4,
    borderTopColor: AUI_COLORS.PoppyYellow.tint2
  }
});

export {
  AccountsHomeCard
}