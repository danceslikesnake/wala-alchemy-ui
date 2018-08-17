import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {
  Subheadline,
  AUI_COLORS,
} from '../../../../Elements/index';

import Modal from 'react-native-modalbox';
import Spinner from 'react-native-spinkit';

class BusyOverlay extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _open = () => {
    this.busyOverlay.open();
  };

  _close = () => {
    this.busyOverlay.close();
  };

  render() {
    const {
      message
    } = this.props;

    return (
      <Modal
        style={styles.busyOverlay}
        ref={busyOverlay => (this.busyOverlay = busyOverlay)}
        coverScreen
        backdropOpacity={0.9}
        backdropColor={'white'}
        swipeToClose={false}
        backButtonClose={false}
        backdropPressToClose={false}
      >
        <Spinner color={AUI_COLORS.WalaTeal.hex} type={'ThreeBounce'} size={39} />
        <Subheadline fonFamily="Poppins" color={AUI_COLORS.Charcoal.hex}>
          {message}
        </Subheadline>
      </Modal>
    );
  }
}

BusyOverlay.defaultProps = {
  message: 'Busy...'
};

BusyOverlay.propTypes = {
  message: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  busyOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export {
  BusyOverlay
}