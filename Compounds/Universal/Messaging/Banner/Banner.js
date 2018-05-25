import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, StyleSheet } from 'react-native';
import {
  Container,
  DenseBodyText,
  SmallDisplay,
  Divider,
  Icons,
  Spacer,
  AUI_COLORS,
} from '../../../../Elements/index';
import {AUI_FUNCTIONS} from '../../../../Helpers/index';
import * as Animatable from 'react-native-animatable';

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerHeight: 0,
      bannerHasShown: false,
      bannerY: -1000,
      bannerPosition: 'absolute',
      trackOnLayout: true
    };
  }

  componentDidUpdate(){
    if(!this.state.bannerHasShown)
      this._openBanner();
  }

  _setMaxHeight = event => {
    if (this.state.trackOnLayout) {
      this.setState({
        bannerHeight: event.nativeEvent.layout.height,
        bannerY: 0 - event.nativeEvent.layout.height,
        bannerPosition: 'relative',
        trackOnLayout: false
      });
    }
  };

  _openBanner = () => {
    this.banner.transition({marginTop: 0 - this.state.bannerHeight}, {marginTop: 0}, 200, 'ease-out');
  };

  _closeBanner = () => {
    this.setState({
      bannerHasShown: true
    });
    this.banner.transition({marginTop: 0}, {marginTop: 0 - this.state.bannerHeight}, 200, 'ease-out');
  };

  render() {

    let backgroundColor, accentColor, textColor, iconName;

    switch (this.props.messageCondition) {
      case 'success':
        backgroundColor = AUI_COLORS.WalaTeal.hex;
        accentColor = 'white';
        textColor = 'white';
        iconName = 'check-circle';
        break;
      case 'warning':
        backgroundColor = AUI_COLORS.PoppyYellow.hex;
        accentColor = AUI_COLORS.PoppyYellow.shade3;
        textColor = AUI_COLORS.Charcoal.hex;
        iconName = 'warning';
        break;
      case 'informational':
      default:
        backgroundColor = 'white';
        accentColor = AUI_COLORS.CuriousBlue.hex;
        textColor = AUI_COLORS.Slate.hex;
        iconName = 'info';
        break;
    }

    iconName = this.props.iconName ? this.props.iconName : iconName;
    return (
      <Animatable.View
        ref={banner => this.banner = banner}
        style={{backgroundColor: backgroundColor, marginTop: this.state.bannerY, position: this.state.bannerPosition}}
        onLayout={this.state.trackOnLayout ? (nativeEvent) => {
          this._setMaxHeight(nativeEvent);
        } : null}
      >
          <Spacer multiplier={3} dense />
          <Container variation={'card'} actAsRow>
            {this.props.addIcon && (
              <Container actAsRow>
                <Icons
                  iconSet={'material-design'}
                  iconName={iconName}
                  iconColor={accentColor}
                  iconSize={26}
                />
                <Spacer horizontal />
              </Container>
            )}
            <DenseBodyText color={textColor} style={{ flex: 1 }}>
              {this.props.message}
            </DenseBodyText>
          </Container>
          <Spacer dense />
          <Container actAsRow style={{ justifyContent: 'flex-end' }}>
            {this.props.dismissButtonLabel && (
              <Container actAsRow>
                <TouchableNativeFeedback
                  onPress={() => {
                    this._closeBanner();
                  }}>
                  <Container style={styles.button}>
                    <SmallDisplay color={accentColor}>
                      {this.props.dismissButtonLabel ? this.props.dismissButtonLabel : 'Got It'}
                    </SmallDisplay>
                  </Container>
                </TouchableNativeFeedback>
                <Spacer horizontal />
              </Container>
            )}
            {this.props.secondaryButtonLabel &&
            !this.props.addDismissButton && (
              <Container actAsRow>
                <TouchableNativeFeedback onPress={this.props.secondaryButtonOnPress}>
                  <Container style={styles.button}>
                    <SmallDisplay color={accentColor}>
                      {this.props.secondaryButtonLabel}
                    </SmallDisplay>
                  </Container>
                </TouchableNativeFeedback>
                <Spacer horizontal />
              </Container>
            )}
            {this.props.primaryButtonLabel && (
              <Container actAsRow>
                <TouchableNativeFeedback onPress={this.props.primaryButtonOnPress}>
                  <Container style={styles.button}>
                    <SmallDisplay color={accentColor}>{this.props.primaryButtonLabel}</SmallDisplay>
                  </Container>
                </TouchableNativeFeedback>
                <Spacer horizontal />
              </Container>
            )}
          </Container>
          <Spacer />
          <Divider size={'small'} />
      </Animatable.View>
    );
  }
}

Banner.defaultProps = {
  messageCondition: 'informational',
};

Banner.propTypes = {
  message: PropTypes.string.isRequired,
  messageCondition: PropTypes.oneOf(['success', 'warning', 'informational']),
  addIcon: PropTypes.bool,
  dismissButtonLabel: PropTypes.string,
  primaryButtonLabel: PropTypes.string,
  primaryButtonOnPress: PropTypes.func,
  secondaryButtonLabel: PropTypes.string,
  secondaryButtonOnPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    paddingHorizontal: AUI_FUNCTIONS.gridBaseMultiplier(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideBanner: {
    position: 'absolute',
    top: -1000
  },
  placeBanner: {
    position: 'relative'
  }
});

export {
  Banner
}