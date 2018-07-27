import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  StyleSheet
} from 'react-native';
import { AUI_FUNCTIONS } from "../../../Helpers";

class ImageContainer extends Component {

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
      source,
      actAsRow,
      isFlex,
      justifyContent,
      alignItems,
      aspectRatio,
      children,
      ...props
    } = this.props;

    return(
      <ImageBackground
        {...props}
        onLayout={(aspectRatio && this.state.trackContainerWidth) ? (nativeEvent) => {
          this._setContainerWidth(nativeEvent);
        } : null}
        source={source}
        imageStyle={{resizeMode: 'cover'}}
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
      </ImageBackground>
    );
  }
}

ImageContainer.defaultProps = {
  variation: 'full'
};

ImageContainer.propTypes = {
  variation: PropTypes.oneOf([
    'full',
    'wide',
    'card'
  ]),
  source: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  actAsRow: PropTypes.bool,
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
  },
});

export {
  ImageContainer
}