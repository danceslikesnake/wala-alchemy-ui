import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { AUI_FUNCTIONS } from "../../../Helpers";

class GradientContainer extends Component {

  constructor(props) {
    super(props);
  }

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
      ...props
    } = this.props;

    switch(gradientDirection) {
      case 'vertical':
        return(
          <LinearGradient
            {...props}
            colors={colors}
            style={[
              styles[variation],
              actAsRow ? {flexDirection: 'row'} : null,
              isFlex ? {flex: 1} : null,
              {justifyContent: justifyContent, alignItems: alignItems},
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
            colors={colors}
            style={[
              styles[variation],
              actAsRow ? {flexDirection: 'row'} : null,
              isFlex ? {flex: 1} : null,
              {justifyContent: justifyContent, alignItems: alignItems},
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
  ])
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