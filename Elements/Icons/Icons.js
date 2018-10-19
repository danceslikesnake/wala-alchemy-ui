import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AUI_COLORS } from "../Colors";

// Wala Icons
import { createIconSetFromFontello, createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from './config.json';
const WalaIcon = createIconSetFromFontello(fontelloConfig);

// Font Awesome 5 Icons
import icoMoonConfig from './FontAwesome5ProSolid.json';
const Fa5ProSolidIcon = createIconSetFromIcoMoon(icoMoonConfig);
import icoMoonConfig2 from './FontAwesome5ProRegular.json';
const Fa5ProRegularIcon = createIconSetFromIcoMoon(icoMoonConfig2);
import icoMoonConfig3 from './FontAwesome5ProLight.json';
const Fa5ProLightIcon = createIconSetFromIcoMoon(icoMoonConfig3);
import icoMoonConfig4 from './FontAwesome5ProBrands.json';
const Fa5ProBrandIcon = createIconSetFromIcoMoon(icoMoonConfig4);

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
      case 'font-awesome-regular':
        return(
          <Fa5ProRegularIcon
            name={this.props.iconName}
            size={this.props.iconSize ? this.props.iconSize : 21}
            color={this.props.iconColor ? this.props.iconColor : AUI_COLORS.ScampiPurple.tint2}
          />
        );
      case 'font-awesome-light':
        return(
          <Fa5ProLightIcon
            name={this.props.iconName}
            size={this.props.iconSize ? this.props.iconSize : 21}
            color={this.props.iconColor ? this.props.iconColor : AUI_COLORS.ScampiPurple.tint2}
          />
        );
      case 'font-awesome-brands':
        return(
          <Fa5ProBrandIcon
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
    'font-awesome',
    'font-awesome-regular',
    'font-awesome-light',
    'font-awesome-brands'
  ]),
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  containerStyles: PropTypes.object
};

export {
  Icons
}