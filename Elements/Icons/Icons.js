import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './config.json';
const WalaIcon = createIconSetFromFontello(fontelloConfig);
import { WA_COLORS } from "../Colors";

class Icons extends Component {

  constructor(props) {
    super(props);
  }

  getContent = () => {
    switch(this.props.variation) {
      case 'material-design':
        return(
          <MaterialIcons
            name={this.props.iconName}
            size={this.props.iconSize ? this.props.iconSize : 21}
            color={this.props.iconColor ? this.props.iconColor : WA_COLORS.ScampiPurple.tint2}
          />
        );
        break;
      case 'wala':
      default:
        return(
          <WalaIcon
            name={this.props.iconName}
            size={this.props.iconSize ? this.props.iconSize : 21}
            color={this.props.iconColor ? this.props.iconColor : WA_COLORS.ScampiPurple.tint2}
          />
        );
        break;
    }
  };

  render(){
    const {
      containerStyles
    } = this.props;

    const content = this.getContent();

    return (
      <View style={containerStyles}>
        {content}
      </View>
    );
  }
}

Icons.defaultProps = {
  variation: 'wala'
};

Icons.propTypes = {
  variation: PropTypes.oneOf([
    'wala',
    'material-design'
  ]),
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  containerStyles: PropTypes.object
};

export {
  Icons
}