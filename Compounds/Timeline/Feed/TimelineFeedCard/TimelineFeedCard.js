import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import {
  Container,
  Caption,
  Subheadline,
  SmallDisplay,
  Icons,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_TYPOGRAPHY, Divider
} from '../../../../Elements/index';
import {
  PopoverMenu
} from '../../../../Compounds/index';
import {
  AUI_CONSTANTS,
  AUI_FUNCTIONS
} from "../../../../Helpers/index";
import { CachedImage } from 'react-native-cached-image';

class TimelineFeedCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyImageWidth: 0,
      trackBodyImageWidth: true
    }
  }

  renderHeader = (headerTextColor, headerText, renderHeaderMenu) => {
    return(
      <Container actAsRow alignItems={'center'} style={localStyles.header}>
        <Caption isFlex color={headerTextColor}>{headerText.toUpperCase()}</Caption>
        {renderHeaderMenu ? <PopoverMenu options={renderHeaderMenu} /> : null}
      </Container>
    );
  };

  renderStandardBodyLayout = (bodyHeadline, bodyDescription, bodyInsetIcon) => {
    if(bodyInsetIcon) {
      return(
        <Container actAsRow>
          <Container style={{paddingLeft: AUI_CONSTANTS.gridBase}}>
            {bodyInsetIcon}
          </Container>
          <Container isFlex>
            {bodyHeadline &&
            <Subheadline
              dense
              style={localStyles.bodyHeadline}
              color={AUI_COLORS.Charcoal.hex}
            >
              {bodyHeadline}
            </Subheadline>
            }
            {bodyDescription &&
            <Caption style={localStyles.bodyDescription}>{bodyDescription}</Caption>
            }
          </Container>
        </Container>
      );
    } else {
      return(
        <Container>
          {bodyHeadline &&
          <Subheadline
            dense
            style={localStyles.bodyHeadline}
            color={AUI_COLORS.Charcoal.hex}
          >
            {bodyHeadline}
          </Subheadline>
          }
          {bodyDescription &&
          <Caption style={localStyles.bodyDescription}>{bodyDescription}</Caption>
          }
        </Container>
      );
    }
  };

  _setBodyImageWidth = event => {
    if (this.state.trackBodyImageWidth) {
      this.setState({
        trackBodyImageWidth: false,
        bodyImageWidth: event.nativeEvent.layout.width
      });
    }
  };

  render() {
    const {
      cardBorderColor,
      headerText,
      headerTextColor,
      renderHeaderMenu,
      bodyImage,
      bodyImageAspectRatio,
      bodyInsetIcon,
      bodyHeadline,
      bodyDescription,
      renderBody,
      callToActionOnPress,
      callToActionLabel,
      footerActions
    } = this.props;

    return (
      <Container
        variation={'card'}
        style={[
          AUI_LAYOUT.presets.card,
          localStyles.cardBorder,
          {borderTopColor: cardBorderColor}
        ]}
      >
        {this.renderHeader(headerTextColor, headerText, renderHeaderMenu)}
        {renderBody ? (
          <Container>
            {renderBody}
          </Container>
        ) : (
          <Container>
            {this.renderStandardBodyLayout(bodyHeadline, bodyDescription, bodyInsetIcon)}
            {callToActionOnPress &&
            <TouchableNativeFeedback onPress={callToActionOnPress}>
              <Container
                actAsRow
                alignItems={'center'}
                style={[localStyles.callToAction, AUI_LAYOUT.roundCorners]}
              >
                <SmallDisplay isFlex color={'white'}>{callToActionLabel}</SmallDisplay>
                <Container
                  style={[localStyles.callToActionOrnament, AUI_LAYOUT.roundRightCorners]}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Icons
                    iconName={'chevron-right'}
                    iconColor={'white'}
                    iconSet={'material-design'}
                    iconSize={26}
                  />
                </Container>
              </Container>
            </TouchableNativeFeedback>
            }
            {bodyImage ? (
              <View
                onLayout={this.state.trackBodyImageWidth ? (nativeEvent) => {
                  this._setBodyImageWidth(nativeEvent);
                } : null}
              >
                <CachedImage
                  source={bodyImage}
                  style={[
                    localStyles.bodyImage,
                    {height: this.state.bodyImageWidth * bodyImageAspectRatio}
                  ]}
                  resizeMode={'cover'}
                />
              </View>
            ) : null}
          </Container>
        )}
        {footerActions &&
          <Container style={localStyles.footer}>
            <Divider />
            <Container actAsRow justifyContent={'flex-end'} style={{marginRight: -13}}>
              {footerActions.map((action, idx) => {
                return <Container key={idx}>{action.component}</Container>;
              })}
            </Container>
          </Container>
        }
      </Container>
    );
  }
}

TimelineFeedCard.defaultProps = {
  cardBorderColor: AUI_COLORS.CuriousBlue.tint2,
  headerText: 'Timeline Card',
  headerTextColor: AUI_COLORS.CuriousBlue.hex,
  bodyImageAspectRatio: AUI_LAYOUT.aspectRatios.widescreen,
  callToActionLabel: 'Learn More'
};

TimelineFeedCard.propTypes = {
  cardBorderColor: PropTypes.string,
  headerText: PropTypes.string,
  headerTextColor: PropTypes.string,
  renderHeaderMenu: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  bodyImage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  bodyImageAspectRatio: PropTypes.number,
  bodyInsetIcon: PropTypes.element,
  bodyHeadline: PropTypes.string,
  bodyDescription: PropTypes.string,
  renderBody: PropTypes.element,
  callToActionOnPress: PropTypes.func,
  callToActionLabel: PropTypes.string,
  footerActions: PropTypes.array
};

const localStyles = StyleSheet.create({
  cardBorder: {
    borderTopWidth: 4
  },
  header: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(6, true),
    paddingLeft: AUI_CONSTANTS.gridBase
  },
  bodyImage: {
    width: '100%'
  },
  bodyHeadline: {
    paddingHorizontal: AUI_CONSTANTS.gridBase,
    marginBottom: AUI_CONSTANTS.gridBaseDense
  },
  bodyDescription: {
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.regular,
    paddingHorizontal: AUI_CONSTANTS.gridBase,
    marginBottom: AUI_FUNCTIONS.gridBaseMultiplier(2, true)
  },
  callToAction: {
    backgroundColor: AUI_COLORS.WalaTeal.hex,
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    marginHorizontal: AUI_CONSTANTS.gridBase,
    marginBottom: AUI_FUNCTIONS.gridBaseMultiplier(2, true),
    paddingLeft: AUI_CONSTANTS.gridBase
  },
  callToActionOrnament: {
    width: AUI_FUNCTIONS.gridBaseMultiplier(3),
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    backgroundColor: AUI_COLORS.WalaTeal.tint1,
  },
  footer: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(5, true),
    marginHorizontal: 13
  }
});

export {
  TimelineFeedCard
}