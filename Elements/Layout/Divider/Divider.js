import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet
} from 'react-native';
import { AUI_COLORS } from "../../Colors";
import { AUI_FUNCTIONS } from "../../../Helpers";
import LinearGradient from 'react-native-linear-gradient';

class Divider extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {
      size,
      extendLeftToFillContainer,
      extendRightToFillContainer
    } = this.props;

    return(
      <View
        style={[
          styles[size],
          styles.divider,
          {
            marginLeft: 0 - extendLeftToFillContainer,
            marginRight: 0 - extendRightToFillContainer
          }
        ]}
      >
        {size == 'large' &&
          <LinearGradient
            colors={[AUI_COLORS.ScampiPurple.hex, AUI_COLORS.Silver.hex]}
            style={styles.gradient}
          />
        }
      </View>
    );
  }
}

Divider.defaultProps = {
  size: 'tiny',
  extendLeftToFillContainer: 0,
  extendRightToFillContainer: 0
};

Divider.propTypes = {
  size: PropTypes.oneOf([
    'tiny',
    'small',
    'medium',
    'large'
  ]),
  extendLeftToFillContainer: PropTypes.number,
  extendRightToFillContainer: PropTypes.number
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: AUI_COLORS.Silver.hex
  },
  gradient: {
    flex: 1,
    height: 9,
    flexDirection: 'row',
    opacity: 0.2
  },
  tiny: {
    height: 1,
  },
  small: {
    height: 4,
  },
  medium: {
    height: 8,
  },
  large: {
    height: AUI_FUNCTIONS.verticalRhythm(),
  }
});

export {
  Divider
}