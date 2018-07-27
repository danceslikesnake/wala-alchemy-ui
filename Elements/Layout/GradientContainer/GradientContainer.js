import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { AUI_FUNCTIONS } from "../../../Helpers";

class GradientContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      containerWidth: 0,
      trackContainerWidth: true
    }
  }

  _setContainerWidth = event => {
    if (this.state.trackContainerWidth) {
      this.setState({
        trackContainerWidth: false,
        containerWidth: event.nativeEvent.layout.width
      });
    }
  };

  render(){
    const {
      variation,
      colors,
      actAsRow,
      children,
      gradientDirection,
      isFlex,
      justifyContent,
      alignItems,
      aspectRatio,
      ...props
    } = this.props;

    switch(gradientDirection) {
      case 'vertical':
        return(
          <LinearGradient
            {...props}
            onLayout={(aspectRatio && this.state.trackContainerWidth) ? (nativeEvent) => {
              this._setContainerWidth(nativeEvent);
            } : null}
            colors={colors}
            style={[
              styles[variation],
              actAsRow ? {flexDirection: 'row'} : null,
              isFlex ? {flex: 1} : null,
              {justifyContent: justifyContent, alignItems: alignItems},
              (aspectRatio && !this.state.trackContainerWidth) ?
                {width: this.state.containerWidth, height: this.state.containerWidth * aspectRatio}
                : null,
              this.props.style
            ]}
          >
            {children}
          </LinearGradient>
        );
      case 'diagonal':
      default:
        return(
          <LinearGradient
            {...props}
            onLayout={(aspectRatio && this.state.trackContainerWidth) ? (nativeEvent) => {
              this._setContainerWidth(nativeEvent);
            } : null}
            colors={colors}
            style={[
              styles[variation],
              actAsRow ? {flexDirection: 'row'} : null,
              isFlex ? {flex: 1} : null,
              {justifyContent: justifyContent, alignItems: alignItems},
              (aspectRatio && !this.state.trackContainerWidth) ?
                {width: this.state.containerWidth, height: this.state.containerWidth * aspectRatio}
                : null,
              this.props.style
            ]}
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
          >
            {children}
          </LinearGradient>
        );
    }
  }
}

GradientContainer.defaultProps = {
  variation: 'full',
  gradientDirection: 'diagonal'
};

GradientContainer.propTypes = {
  variation: PropTypes.oneOf([
    'full',
    'wide',
    'card'
  ]),
  colors: PropTypes.array.isRequired,
  actAsRow: PropTypes.bool,
  gradientDirection: PropTypes.oneOf([
    'diagonal',
    'vertical'
  ]),
  isFlex: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'baseline',
    'stretch'
  ]),
  aspectRatio: PropTypes.number
};

const styles = StyleSheet.create({
  full: {
  },
  wide: {
    marginHorizontal: 4,
    paddingHorizontal: 9
  },
  card: {
    marginHorizontal: AUI_FUNCTIONS.gridBaseMultiplier()
  }
});

export {
  GradientContainer
}