import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  GradientContainer,
  ImageContainer,
  Caption,
  Display,
  Spacer,
  TileActions,
  Divider,
  AUI_COLORS,
  AUI_LAYOUT,
} from '../../../index.js';

class EarnOpportunityCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      category,
      headline,
      image,
      tileActions
    } = this.props;

    return (
      <Container
        variation={'card'}
        style={[
          AUI_LAYOUT.presets.card,
          {overflow: 'hidden'}
        ]}
      >
        <GradientContainer
          colors={[AUI_COLORS.WalaTeal.hex, AUI_COLORS.ScampiPurple.hex]}
          style={{height: 4}}
        />
        <Container variation={'card'}>
          <Caption style={{lineHeight: 40}} color={AUI_COLORS.ScampiPurple.tint2}>{category.toUpperCase()}</Caption>
          <Display
            color={AUI_COLORS.ScampiPurple.shade1}
            dense
          >
            {headline}
          </Display>
        </Container>
        <Spacer dense multiplier={2} />
        {image && <ImageContainer source={image} aspectRatio={AUI_LAYOUT.aspectRatios.narrow} />}
        <Divider/>
        <TileActions
          tiles={tileActions}
          dense
          rowCount={2}
        />
      </Container>
    );
  }
}

EarnOpportunityCard.defaultProps = {
  category: 'Opportunity Category',
  headline: 'Opportunity Headline'
};

EarnOpportunityCard.propTypes = {
  category: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  tileActions: PropTypes.array.isRequired
};

export {
  EarnOpportunityCard
}