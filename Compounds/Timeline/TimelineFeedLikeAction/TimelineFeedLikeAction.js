import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, StyleSheet } from 'react-native';
import {
  Container,
  Caption,
  Spacer,
  Icons,
  AUI_COLORS
} from '../../../Elements/index';
import {
  AUI_FUNCTIONS,
  AUI_CONSTANTS
} from "../../../Helpers/index";

class TimelineFeedLikeAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false
    }
  }

  componentWillMount() {
    if(this.props.isLiked) {
      this.setState({
        isLiked: true
      });
    }
  }

  render() {
    const { onPress } = this.props;

    return (
      <TouchableNativeFeedback onPress={() => {
        onPress();
        this.setState({isLiked: !this.state.isLiked});
      }}>
        <Container style={localStyles.likeButton} alignItems={'center'} actAsRow>
          <Caption dense color={this.state.isLiked ? AUI_COLORS.WalaTeal.hex : AUI_COLORS.Slate.hex}>{'LIKE'}</Caption>
          <Spacer horizontal dense />
          <Icons
            iconName={'thumb-up'}
            iconSize={21}
            iconSet={'material-design'}
            iconColor={this.state.isLiked ? AUI_COLORS.WalaTeal.hex : AUI_COLORS.Slate.hex}
          />
        </Container>
      </TouchableNativeFeedback>
    );
  }
}

TimelineFeedLikeAction.propTypes = {
  onPress: PropTypes.func,
  isLiked: PropTypes.bool
};

const localStyles = StyleSheet.create({
  likeButton: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(5, true),
    paddingHorizontal: AUI_CONSTANTS.gridBase
  }
});


export {
  TimelineFeedLikeAction
}