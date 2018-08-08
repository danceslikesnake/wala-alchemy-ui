import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createIconSetFromFontello, createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from './config.json';
const WalaIcon = createIconSetFromFontello(fontelloConfig);
import icoMoonConfig from './FontAwesome5ProSolid.json';
const Fa5ProSolidIcon = createIconSetFromIcoMoon(icoMoonConfig);
import { AUI_COLORS } from "../Colors";

class Icons extends Component {

  constructor(props) {
    super(props);
  }

  getContent = () => {
    switch(this.props.iconSet) {
      case 'material-design':
        return(
          <MaterialIcons
            name={this.props.iconName}
            size={this.props.iconSize ? this.props.iconSize : 21}
            color={this.props.iconColor ? this.props.iconColor : AUI_COLORS.ScampiPurple.tint2}
          />
        );
      case 'font-awesome':
        return(
          <Fa5ProSolidIcon
            name={this.props.iconName}
            size={this.props.iconSize ? this.props.iconSize : 21}
            color={this.props.iconColor ? this.props.iconColor : AUI_COLORS.ScampiPurple.tint2}
          />
        );
      case 'wala':
      default:
        return(
          <WalaIcon
            name={this.props.iconName}
            size={this.props.iconSize ? this.props.iconSize : 21}
            color={this.props.iconColor ? this.props.iconColor : AUI_COLORS.ScampiPurple.tint2}
          />
        );
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
  iconSet: 'wala'
};

Icons.propTypes = {
  iconSet: PropTypes.oneOf([
    'wala',
    'material-design',
    'font-awesome'
  ]),
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  containerStyles: PropTypes.object
};

export {
  Icons
}