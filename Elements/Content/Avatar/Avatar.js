import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { AUI_COLORS } from "../../Colors";
import { AUI_TYPOGRAPHY } from "../../Typography";
import { AUI_CONSTANTS, AUI_FUNCTIONS } from "../../../Helpers";
import { CachedImage } from 'react-native-cached-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Avatar extends Component {

  constructor(props) {
    super(props);
  }

  getContent = () => {
    switch(this.props.variation) {
      case 'image':
        return(
          <CachedImage
            source={this.props.imageSource}
            style={styles[this.props.size].dimensions}
          />
        );
        break;
      case 'initials':
        return (
          <View
            style={[styles.noImageAvatar, styles[this.props.size].dimensions]}
          >
            <Text
              style={styles[this.props.size].textSize}
            >
              {this.props.initials}
            </Text>
          </View>
        );
        break;
      case 'default':
      default:
        return (
          <View
            style={[styles.noImageAvatar, styles[this.props.size].dimensions]}
          >
            <MaterialIcons
              name={'tag-faces'}
              color={AUI_COLORS.ScampiPurple.tint4}
              size={styles[this.props.size].iconSize}
            />
          </View>
        );
        break;
    }
  };

  render(){
    const {
      size
    } = this.props;

    const content = this.getContent();

    return(
      <View style={styles[size].dimensions}>
        {content}
      </View>
    );
  }
}

Avatar.defaultProps = {
  size: 'regular',
  variation: 'default'
};

Avatar.propTypes = {
  variation: PropTypes.oneOf([
    'default',
    'initials',
    'image'
  ]),
  imageSource: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  initials: PropTypes.string,
  size: PropTypes.oneOf([
    'tiny',
    'small',
    'regular',
    'large',
    'larger',
    'largest'
  ])
};

const vr13 = AUI_CONSTANTS.gridBase;
const vr26 = AUI_FUNCTIONS.gridBaseMultiplier(2);
const vr39 = AUI_FUNCTIONS.gridBaseMultiplier(3);
const vr52 = AUI_FUNCTIONS.gridBaseMultiplier(4);
const vr65 = AUI_FUNCTIONS.gridBaseMultiplier(5);
const vr78 = AUI_FUNCTIONS.gridBaseMultiplier(6);
const vr91 = AUI_FUNCTIONS.gridBaseMultiplier(7);

const styles = {
  noImageAvatar: {
    backgroundColor: AUI_COLORS.ScampiPurple.hex,
    borderWidth: 4,
    borderColor: AUI_COLORS.ScampiPurple.tint4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tiny: {
    textSize: {
      fontSize: 10,
      fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
      color: AUI_COLORS.ScampiPurple.tint4
    },
    iconSize: vr13,
    dimensions: {
      width: vr26,
      height: vr26,
      borderRadius: (vr26) / 2
    }
  },
  small: {
    textSize: {
      fontSize: AUI_TYPOGRAPHY.typeScale.size12,
      fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
      color: AUI_COLORS.ScampiPurple.tint4
    },
    iconSize: vr26,
    dimensions: {
      width: vr39,
      height: vr39,
      borderRadius: (vr39) / 2
    }
  },
  regular: {
    textSize: {
      fontSize: AUI_TYPOGRAPHY.typeScale.size16,
      fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
      color: AUI_COLORS.ScampiPurple.tint4
    },
    iconSize: vr39,
    dimensions: {
      width: vr52,
      height: vr52,
      borderRadius: vr26
    }
  },
  large: {
    textSize: {
      fontSize: AUI_TYPOGRAPHY.typeScale.size26,
      fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
      color: AUI_COLORS.ScampiPurple.tint4
    },
    iconSize: vr52,
    dimensions: {
      width: vr65,
      height: vr65,
      borderRadius: vr65 / 2
    }
  },
  larger: {
    textSize: {
      fontSize: AUI_TYPOGRAPHY.typeScale.size26,
      fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
      color: AUI_COLORS.ScampiPurple.tint4
    },
    iconSize: vr65,
    dimensions: {
      width: vr78,
      height: vr78,
      borderRadius: vr39
    }
  },
  largest: {
    textSize: {
      fontSize: AUI_TYPOGRAPHY.typeScale.size42,
      fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
      color: AUI_COLORS.ScampiPurple.tint4
    },
    iconSize: vr78,
    dimensions: {
      width: vr91,
      height: vr91,
      borderRadius: vr91 / 2
    }
  }
};

export {
  Avatar
}