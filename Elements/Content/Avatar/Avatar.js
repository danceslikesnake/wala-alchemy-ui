import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { WA_COLORS } from "../../Colors";
import { WA_TYPOGRAPHY } from "../../Typography";
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
              color={WA_COLORS.ScampiPurple.tint4}
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
  imageSource: PropTypes.number,
  initials: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'regular',
    'large',
    'larger',
    'largest'
  ])
};

const styles = {
  noImageAvatar: {
    backgroundColor: WA_COLORS.ScampiPurple.hex,
    borderWidth: 4,
    borderColor: WA_COLORS.ScampiPurple.tint4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  small: {
    textSize: {
      fontSize: WA_TYPOGRAPHY.typeScale.size12,
      fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold,
      color: WA_COLORS.ScampiPurple.tint4
    },
    iconSize: 26,
    dimensions: {
      width: 39,
      height: 39,
      borderRadius: 39 / 2
    }
  },
  regular: {
    textSize: {
      fontSize: WA_TYPOGRAPHY.typeScale.size16,
      fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold,
      color: WA_COLORS.ScampiPurple.tint4
    },
    iconSize: 39,
    dimensions: {
      width: 52,
      height: 52,
      borderRadius: 26
    }
  },
  large: {
    textSize: {
      fontSize: WA_TYPOGRAPHY.typeScale.size26,
      fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold,
      color: WA_COLORS.ScampiPurple.tint4
    },
    iconSize: 52,
    dimensions: {
      width: 65,
      height: 65,
      borderRadius: 65 / 2
    }
  },
  larger: {
    textSize: {
      fontSize: WA_TYPOGRAPHY.typeScale.size26,
      fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold,
      color: WA_COLORS.ScampiPurple.tint4
    },
    iconSize: 65,
    dimensions: {
      width: 78,
      height: 78,
      borderRadius: 39
    }
  },
  largest: {
    textSize: {
      fontSize: WA_TYPOGRAPHY.typeScale.size42,
      fontFamily: WA_TYPOGRAPHY.ProiximaNova.extrabold,
      color: WA_COLORS.ScampiPurple.tint4
    },
    iconSize: 78,
    dimensions: {
      width: 91,
      height: 91,
      borderRadius: 91 / 2
    }
  }
};

export {
  Avatar
}