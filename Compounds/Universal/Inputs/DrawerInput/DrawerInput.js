import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Modal from 'react-native-modal';
import {
  AUI_COLORS,
  Caption,
  Container,
  Divider,
  Icons,
  Spacer,
  Subheadline,
} from '../../../../Elements/index';

class DrawerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySelectedIndex: 0,
      showDrawer: false,
    };
  }

  _hideDrawer = () => {
    this.setState({
      showDrawer: false,
    });
  };

  _showDrawer = () => {
    this.setState({
      showDrawer: true,
    });
  };

  renderDrawerChoices = (choices = []) => {
    return choices.map((choice, idx) => (
      <TouchableNativeFeedback
        key={idx}
        onPress={() => {
          this.setState({
            displaySelectedIndex: idx,
            showDrawer: false,
          });
          this.props.onSelectChoice(idx);
        }}>
        <Container
          style={
            idx === this.state.displaySelectedIndex
              ? { borderLeftWidth: 4, borderLeftColor: AUI_COLORS.WalaTeal.hex }
              : null
          }>
          {choice.displayComponent}
          <Divider />
        </Container>
      </TouchableNativeFeedback>
    ));
  };

  render() {
    const { drawerChoices, drawerHeaderText, label } = this.props;
    const { displaySelectedIndex } = this.state;

    const currentChoice =
      drawerChoices &&
      displaySelectedIndex < drawerChoices.length &&
      drawerChoices[displaySelectedIndex];
    const currentDisplayComponent = (currentChoice && currentChoice.displayComponent) || null;

    const renderedDrawerChoices = this.renderDrawerChoices(drawerChoices);

    return (
      <Container>
        <Caption>{label}</Caption>
        <Spacer dense />
        <TouchableNativeFeedback onPress={this._showDrawer}>
          <Container actAsRow style={styles.baseContainer}>
            <Container isFlex>{currentDisplayComponent}</Container>
            <Container style={styles.iconWrapper} justifyContent={'center'} alignItems={'center'}>
              <Icons
                iconColor={AUI_COLORS.WalaTeal.hex}
                iconSet={'font-awesome'}
                iconSize={16}
                iconName={'chevron-left'}
              />
            </Container>
          </Container>
        </TouchableNativeFeedback>
        <Spacer />
        <Modal
          isVisible={this.state.showDrawer}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
          onBackdropPress={this._hideDrawer}
          onBackButtonPress={this._hideDrawer}
          backdropColor={AUI_COLORS.Charcoal.hex}
          backdropopacity={0.8}
          style={styles.modal}>
          <Container isFlex style={styles.drawerContainer}>
            <Container style={styles.drawerHeader} justifyContent={'center'}>
              <Subheadline color={'white'}>{drawerHeaderText}</Subheadline>
            </Container>
            <ScrollView>{renderedDrawerChoices}</ScrollView>
          </Container>
        </Modal>
      </Container>
    );
  }
}

DrawerInput.defaultProps = {
  drawerHeaderText: 'Select One...',
  label: 'Choices',
  drawerChoices: [],
};

DrawerInput.propTypes = {
  drawerChoices: PropTypes.array,
  onSelectChoice: PropTypes.func,
  drawerHeaderText: PropTypes.string,
  label: PropTypes.string,
};

const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: 'white',
    borderRadius: 3,
    elevation: 1,
    marginHorizontal: 1,
    borderWidth: 1,
    borderColor: AUI_COLORS.Iron.hex,
  },
  iconWrapper: {
    borderLeftWidth: 1,
    borderLeftColor: AUI_COLORS.Iron.hex,
    width: 32,
  },
  modal: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 52,
  },
  drawerContainer: {
    backgroundColor: 'white',
    elevation: 8,
  },
  drawerHeader: {
    height: 39,
    backgroundColor: AUI_COLORS.ScampiPurple.hex,
    paddingLeft: 13,
  },
});

export { DrawerInput };
