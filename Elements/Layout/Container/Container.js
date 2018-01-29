import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet
} from 'react-native';
import { AUI_CONSTANTS } from "../../../Helpers";

class Container extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {
      variation,
      actAsRow,
      children,
      ...props
    } = this.props;

    return(
      <View
        {...props}
        style={[
          styles[variation],
          actAsRow ? {flexDirection: 'row'} : null,
          this.props.style
        ]}
      >
        {children}
      </View>
    );
  }
}

Container.defaultProps = {
  variation: 'full'
};

Container.propTypes = {
  variation: PropTypes.oneOf([
    'full',
    'wide',
    'card'
  ]),
  actAsRow: PropTypes.bool
};

const styles = StyleSheet.create({
  full: {
  },
  wide: {
    marginHorizontal: 4,
    paddingHorizontal: 9
  },
  card: {
    marginHorizontal: AUI_CONSTANTS.verticalRhythm
  }
});

export {
  Container
}