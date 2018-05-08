import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { AUI_COLORS } from "../../Colors";
import { AUI_TYPOGRAPHY } from "../../Typography";
import { Icons } from "../../Icons/Icons";

class Badge extends Component {

  constructor(props) {
    super(props);
  }

  getContent = () => {
    switch(this.props.variation) {
      case 'icon':
        return(
          <Icons
            iconSet={'material-design'}
            iconName={this.props.badgeIconName}
            iconSize={10}
            iconColor={'white'}
          />
        );
        break;
      case 'number':
      default:
        return(
          <Text style={styles.text}>{this.props.badgeNumber}</Text>
        );
        break;
    }
  };

  render(){
    const {
      badgeColor,
      pinToBottom,
      bottomAdjust,
      rightAdjust
    } = this.props;

    const content = this.getContent();

    return(
      <View
        style={[
          styles.badge,
          badgeColor ? {backgroundColor: badgeColor} : {backgroundColor: AUI_COLORS.TorchRed.hex},
          pinToBottom ? {
            position: 'absolute',
            bottom: bottomAdjust ? bottomAdjust : 0,
            right: rightAdjust ? rightAdjust : 0
          } : null
        ]}
      >
        {content}
      </View>
    );
  }
}

Badge.defaultProps = {
  variation: 'number'
};

Badge.propTypes = {
  variation: PropTypes.oneOf([
    'number',
    'icon'
  ]),
  badgeIconName: PropTypes.string,
  badgeNumber: PropTypes.number,
  badgeColor: PropTypes.string,
  pinToBottom: PropTypes.bool,
  bottomAdjust: PropTypes.number,
  rightAdjust: PropTypes.number
};

const styles = StyleSheet.create({
  badge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 10,
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
    color: 'white'
  }
});

export {
  Badge
}