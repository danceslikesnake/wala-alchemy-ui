import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {
  Container,
  Icons,
  Spacer,
  Caption,
  Subheadline,
  Divider,
  AUI_COLORS,
  AUI_LAYOUT, GradientContainer,
} from '../../../Elements/index';
import {
  LinearProgress,
  TileActions
} from '../../../Compounds/index';
import {
  AUI_CONSTANTS,
  AUI_FUNCTIONS
} from "../../../Helpers/index";

class SavingsGoalCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      goalName,
      goalDueDate,
      goalSavedAmount,
      goalSavedConvertedAmount,
      goalTargetAmount,
      goalTargetConvertedAmount,
      goalPercentComplete,
      goalActions,
      goalState
    } = this.props;

    let borderColor = AUI_COLORS.CuriousBlue.tint2;
    let trackColor = AUI_COLORS.CuriousBlue.tint4;
    let indicatorColor = AUI_COLORS.CuriousBlue.hex;
    let percentTextColor = AUI_COLORS.CuriousBlue.hex;
    let goalDueDateMessage = 'Due ' + goalDueDate;
    let goalDueDateHighlight = null;

    switch(goalState) {
      case 'overdue':
        borderColor = AUI_COLORS.TorchRed.tint2;
        trackColor = AUI_COLORS.TorchRed.tint4;
        goalDueDateMessage = 'OVERDUE - Due ' + goalDueDate;
        goalDueDateHighlight = {
          backgroundColor: AUI_COLORS.TorchRed.tint2,
          color: 'white',
          marginTop: 4
        };
        break;
      case 'impending':
        borderColor = AUI_COLORS.PoppyYellow.tint2;
        trackColor = AUI_COLORS.PoppyYellow.tint4;
        goalDueDateMessage = 'Almost Due - ' + goalDueDate;
        goalDueDateHighlight = {
          backgroundColor: AUI_COLORS.PoppyYellow.hex,
          color: 'white',
          marginTop: 4
        };
        break;
      case 'complete':
        borderColor = AUI_COLORS.WalaTeal.tint2;
        trackColor = AUI_COLORS.WalaTeal.tint4;
        indicatorColor = AUI_COLORS.WalaTeal.hex;
        percentTextColor = AUI_COLORS.WalaTeal.hex;
        goalDueDateMessage = 'GOAL ACHIEVED!';
        goalDueDateHighlight = {
          backgroundColor: AUI_COLORS.WalaTeal.tint2,
          color: 'white',
          marginTop: 4
        };
        break;
    }

    return (
      <Container
        variation={'card'}
        style={[
          AUI_LAYOUT.presets.card,
          styles.card,
          {borderColor: borderColor}
        ]}>
        <Container style={{ paddingHorizontal: AUI_CONSTANTS.gridBase }}>
          <Subheadline alignCenter color={AUI_COLORS.Charcoal.hex}>{goalName}</Subheadline>
          {goalDueDate &&
            <Container actAsRow justifyContent={'center'}>
              <Caption style={[{borderRadius: 3, paddingHorizontal: 8}, goalDueDateHighlight]}>
                {goalDueDateMessage}
              </Caption>
            </Container>
          }
          <Spacer />
          <LinearProgress percent={goalPercentComplete} trackColor={trackColor} indicatorColor={indicatorColor} percentTextColor={percentTextColor} />
          <Spacer />
          <Container actAsRow>
            <Caption style={{ marginTop: 4 }}>You've Saved</Caption>
            <Container isFlex>
              <Subheadline alignRight color={percentTextColor}>
                {goalSavedAmount}
              </Subheadline>
              {goalSavedConvertedAmount &&
                <Caption style={{marginTop: -4}} alignRight>{goalSavedConvertedAmount}</Caption>
              }
            </Container>
          </Container>
          <Spacer dense />
          <Divider/>
          <Spacer dense />
          <Container actAsRow>
            <Caption style={{ marginTop: 5 }}>Your Target</Caption>
            <Container isFlex>
              <Subheadline alignRight>
                {goalTargetAmount}
              </Subheadline>
              {goalTargetConvertedAmount &&
                <Caption style={{marginTop: -4}} alignRight>{goalTargetConvertedAmount}</Caption>
              }
            </Container>
          </Container>
          <Spacer />
        </Container>
        {goalActions &&
        <Container>
          <Divider size={'small'} />
          <TileActions
            tiles={goalActions}
            dense
            rowCount={goalActions.length}
          />
        </Container>
        }
      </Container>
    );
  }
}

SavingsGoalCard.defaultProps = {
  goalName: 'My Savings Goal',
  goalSavedAmount: '0.00',
  goalTargetAmount: '0.00',
  goalPercentComplete: 0,
  goalState: 'normal'
};

SavingsGoalCard.propTypes = {
  goalName: PropTypes.string.isRequired,
  goalDueDate: PropTypes.string,
  goalSavedAmount: PropTypes.string.isRequired,
  goalSavedConvertedAmount: PropTypes.string,
  goalTargetAmount: PropTypes.string.isRequired,
  goalTargetConvertedAmount: PropTypes.string,
  goalPercentComplete: PropTypes.number,
  goalActions: PropTypes.array,
  goalState: PropTypes.oneOf([
    'normal',
    'overdue',
    'impending',
    'complete'
  ])
};

const styles = StyleSheet.create({
  card: {
    borderTopWidth: 4,
    overflow: 'hidden',
    marginBottom: AUI_CONSTANTS.gridBase,
    paddingTop: 10
  },
  iconBg: {
    width: AUI_FUNCTIONS.gridBaseMultiplier(3, true),
    height: AUI_FUNCTIONS.gridBaseMultiplier(3, true),
    borderRadius: AUI_FUNCTIONS.gridBaseMultiplier(4, true) / 2
  },
  pending: {
    backgroundColor: AUI_COLORS.PoppyYellow.tint2,
    color: 'white',
    marginTop: 4
  },
  overdue: {
    backgroundColor: AUI_COLORS.TorchRed.tint2,
    color: 'white',
    marginTop: 4
  }
});

export {
  SavingsGoalCard
}