import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView} from 'react-native';
import {
  Container,
  Headline,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_TYPOGRAPHY,
  BodyText,
  Subheadline,
  Caption,
  Spacer,
  Divider,
  Icons, SmallDisplay
} from '../../../../Elements/index';
import {
  AUI_FUNCTIONS,
  AUI_CONSTANTS
} from "../../../../Helpers/index";
import Modal from "react-native-modal";

class DrawerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySelectedIndex: 0,
      showDrawer: false
    };
  }

  renderDrawerChoices = (choices) => {
    let choiceArray = [];
    choices.map((choice, idx) => {
      choiceArray.push(
        <TouchableNativeFeedback key={idx} onPress={() => {
          this.setState({
            displaySelectedIndex: idx,
            showDrawer: false
          });
          this.props.onSelectChoice(idx);
        }}>
          <Container style={idx === this.state.displaySelectedIndex ? {borderLeftWidth: 4, borderLeftColor: AUI_COLORS.WalaTeal.hex} : null}>
            {choice.displayComponent}
            <Divider />
          </Container>
        </TouchableNativeFeedback>
      );
    });
    return choiceArray;
  };

  render() {
    const {
      drawerChoices,
      drawerHeaderText,
      label
    } = this.props;


    return (
      <Container>
        <Caption>{label}</Caption>
        <Spacer dense />
        <TouchableNativeFeedback onPress={() => {
          this.setState({
            showDrawer: true
          });
        }}>
          <Container
            actAsRow
            style={styles.baseContainer}
          >
            <Container isFlex>
              {drawerChoices ? drawerChoices[this.state.displaySelectedIndex].displayComponent : null}
            </Container>
            <Container
              style={styles.iconWrapper}
              justifyContent={'center'}
              alignItems={'center'}
            >
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
          onBackdropPress={() => {
            this.setState({
              showDrawer: false
            });
          }}
          onBackButtonPress={() => {
            this.setState({
              showDrawer: false
            });
          }}
          backdropColor={AUI_COLORS.Charcoal.hex}
          backdropopacity={0.8}
          style={styles.modal}
        >
          <Container isFlex style={styles.drawerContainer}>
            <Container style={styles.drawerHeader} justifyContent={'center'}>
              <Subheadline color={'white'}>{drawerHeaderText}</Subheadline>
            </Container>
            <ScrollView>
              {drawerChoices ? this.renderDrawerChoices(drawerChoices) : null}
            </ScrollView>
          </Container>
        </Modal>
      </Container>
    );
  }
}

DrawerInput.defaultProps = {
  drawerHeaderText: 'Select One...',
  label: 'Choices'
};

DrawerInput.propTypes = {
  drawerChoices: PropTypes.array,
  onSelectChoice: PropTypes.func,
  drawerHeaderText: PropTypes.string,
  label: PropTypes.string
};

const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: 'white',
    borderRadius: 3,
    elevation: 1,
    marginHorizontal: 1,
    borderWidth: 1,
    borderColor: AUI_COLORS.Iron.hex
  },
  iconWrapper: {
    borderLeftWidth: 1,
    borderLeftColor: AUI_COLORS.Iron.hex, width: 32
  },
  modal: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 52
  },
  drawerContainer: {
    backgroundColor: 'white',
    elevation: 8
  },
  drawerHeader: {
    height: 39,
    backgroundColor: AUI_COLORS.ScampiPurple.hex,
    paddingLeft: 13
  }
});

export {
  DrawerInput
}