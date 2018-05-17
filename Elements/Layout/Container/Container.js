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
      isFlex,
      justifyContent,
      alignItems,
      children,
      ...props
    } = this.props;

    return(
      <View
        {...props}
        style={[
          styles[variation],
          actAsRow ? {flexDirection: 'row'} : null,
          isFlex ? {flex: 1} : null,
          {justifyContent: justifyContent, alignItems: alignItems},
          this.props.style
        ]}
      >
        {children}
      </View>
    );
  }
}

Container.defaultProps = {
  variation: 'full',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
};

Container.propTypes = {
  variation: PropTypes.oneOf([
    'full',
    'wide',
    'card'
  ]),
  actAsRow: PropTypes.bool,
  isFlex: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around'
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
    marginHorizontal: AUI_CONSTANTS.gridBase
  }
});

export {
  Container
}