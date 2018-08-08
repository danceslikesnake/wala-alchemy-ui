import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  AUI_COLORS,
  Subheadline,
  Caption,
  Spacer,
} from '../../../Elements/index';
import {
  DrawerInput
} from '../../../Compounds/index';

class AccountSelector extends Component {
  constructor(props) {
    super(props);
  }

  renderAccounts = (accounts) => {
    const drawerChoices = [];
    accounts.map((account, idx) => {
      let obj = {
        id: account.id,
        displayComponent: (
          <Container actAsRow alignItems={'center'} style={{height: 78}}>
            <Container isFlex style={{paddingHorizontal: 13}}>
              <Subheadline style={{marginBottom: -5}} color={AUI_COLORS.Charcoal.hex} dense>{account.name}</Subheadline>
              <Subheadline style={{marginBottom: -3}} color={AUI_COLORS.Charcoal.hex}>{account.amount}</Subheadline>
              {account.convertedAmount &&
              <Caption color={AUI_COLORS.ScampiPurple.hex}>{account.convertedAmount}</Caption>
              }
            </Container>
            {account.branding}
            <Spacer horizontal />
          </Container>
        )
      };

      drawerChoices.push(obj);
    });

    return drawerChoices;
  };

  render() {
    const {
      drawerChoices,
      drawerHeaderText,
      label,
      onSelectAccount
    } = this.props;

    return (
      <Container>
        <DrawerInput
          label={label}
          onSelectChoice={onSelectAccount}
          drawerChoices={this.renderAccounts(drawerChoices)}
          drawerHeaderText={drawerHeaderText}
        />
      </Container>
    );
  }
}

AccountSelector.defaultProps = {
  drawerHeaderText: 'Options...',
  label: 'Choose an account'
};

AccountSelector.propTypes = {
  drawerChoices: PropTypes.array.isRequired,
  onSelectAccount: PropTypes.func.isRequired,
  drawerHeaderText: PropTypes.string,
  label: PropTypes.string
};

export {
  AccountSelector
}