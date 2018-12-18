import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, StyleSheet } from 'react-native';
import {
  Container,
  Icons,
  AUI_COLORS,
  AUI_TYPOGRAPHY
} from '../../../../Elements/index';
import {
  AUI_FUNCTIONS
} from "../../../../Helpers/index";
import Menu, { MenuItem } from 'react-native-material-menu';

class PopoverMenu extends Component {
  constructor(props) {
    super(props);
  }

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    const {
      options,
      menuButtonSize,
      menuButtonColor
    } = this.props;

    const button = (
      <Container
        style={menuButtonSize ? {width: menuButtonSize, height: menuButtonSize} : localStyles.menuButton}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Icons
          iconName={'more-horiz'}
          iconSize={26}
          iconSet={'material-design'}
          iconColor={menuButtonColor ? menuButtonColor : AUI_COLORS.Charcoal.tint2}
        />
      </Container>
    );

    if (options instanceof Function) {
      return(
        <TouchableNativeFeedback onPress={() => options()}>
          {button}
        </TouchableNativeFeedback>
      );
    } else {
      return(
        <Menu
          ref={this.setMenuRef}
          button={<TouchableNativeFeedback onPress={this.showMenu}>{button}</TouchableNativeFeedback>}
          style={localStyles.menu}
        >
          {options.map((option, idx) => {
            return (
              <MenuItem
                key={idx}
                onPress={() => {
                  this.hideMenu();
                  option.onPress();
                }}
                style={localStyles.menuItem}
                textStyle={localStyles.menuItemText}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </Menu>
      );
    }
  }
}

PopoverMenu.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]).isRequired,
  menuButtonSize: PropTypes.number,
  menuButtonColor: PropTypes.string
};

const localStyles = StyleSheet.create({
  menu: {
    borderTopWidth: 4,
    borderTopColor: AUI_COLORS.WalaTeal.hex,
    paddingTop: 0
  },
  menuButton: {
    width: AUI_FUNCTIONS.gridBaseMultiplier(6, true),
    height: AUI_FUNCTIONS.gridBaseMultiplier(6, true)
  },
  menuItem: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(5, true)
  },
  menuItemText: {
    color: AUI_COLORS.WalaTeal.shade2,
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.semibold,
    fontSize: 14
  }
});

export {
  PopoverMenu
}