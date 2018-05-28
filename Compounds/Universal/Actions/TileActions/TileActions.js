import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, StyleSheet } from 'react-native';
import {
  Container,
  Divider,
  Icons,
  Spacer,
  Caption1,
  AUI_COLORS,
} from '../../../../Elements/index';
import { CountryInput } from '../../../../Compounds/index';
import {
  AUI_FUNCTIONS
} from "../../../../Helpers/index";

class TileActions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tileArray: null,
      forcedWidth: null,
      cca2: null
    }
  }

  componentWillMount() {
    const tilesToChunks = this._arrayChunk(this.props.tiles, this.props.rowCount);
    switch(this.props.rowCount) {

    }
    this.setState({
      tileArray: tilesToChunks,
      forcedWidth: (100 / this.props.rowCount) + '%'
    });
  }

  _arrayChunk = (myArray, chunk_size) => {
    var results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  };

  _renderSpecialTiles = (type, options, idx, addBorder) => {
    switch(type) {
      case 'countryPicker':
        return(
          <Container
            key={idx}
            isFlex
            actAsRow
            alignItems={'center'}
            justifyContent={'center'}
            style={[
              {backgroundColor: 'white', height: AUI_FUNCTIONS.gridBaseMultiplier(6)},
              addBorder ? localStyles.addBorder : null
            ]}
          >
            <CountryInput
              tileSelector
              cca2={this.state.cca2 ? this.state.cca2 : options.cca2}
              countries={options.countries}
              onChange={(data) => {
                options.onChange(data);
                this.setState({cca2: data.cca2});
              }}
            />
          </Container>
        );
    }
  }

  _renderTile = (tile, idx2, addBorder) => {
    if(tile.specialTile) {
      return this._renderSpecialTiles(tile.specialTile, tile.specialTileOptions, idx2, addBorder);
    } else {
      return (
        <TouchableNativeFeedback key={idx2} onPress={tile.onPress}>
          <Container
            isFlex
            alignItems={'center'}
            justifyContent={'center'}
            style={[
              {height: AUI_FUNCTIONS.gridBaseMultiplier(6), backgroundColor: 'white'},
              addBorder ? localStyles.addBorder : null
            ]}
          >
            <Icons
              iconName={tile.iconName}
              iconSet={tile.iconSet ? tile.iconSet : 'wala'}
              iconSize={26} iconColor={AUI_COLORS.WalaTeal.hex}
            />
            <Spacer dense/>
            <Caption1 color={AUI_COLORS.WalaTeal.shade2}>{tile.label.toUpperCase()}</Caption1>
          </Container>
        </TouchableNativeFeedback>
      );
    }
  };

  render() {
    const {
      rowCount,
      backgroundColor
    } = this.props;
    const { tileArray } = this.state;

    const tileRows = tileArray.map((tileRow, idx) => {
      let fillerTile = (tileRow.length < rowCount) ? <Container style={{flex: (rowCount - tileRow.length)}} /> : null;
      return (
        <Container key={idx} style={backgroundColor ? {backgroundColor: backgroundColor} : null}>
          <Container actAsRow>
            {tileRow.map((tile, idx2) => {
              let addBorder = ((idx2 + 1) < 3);
              return this._renderTile(tile, idx2, addBorder);
            })}
            {fillerTile}
          </Container>
          <Divider />
        </Container>
      );
    });

    return (
      <Container>
        {tileRows}
      </Container>
    );
  }
}

TileActions.defaultProps = {
  rowCount: 3
};

TileActions.propTypes = {
  tiles: PropTypes.array.isRequired,
  rowCount: PropTypes.oneOf([2, 3]),
  backgroundColor: PropTypes.string
};

const localStyles = StyleSheet.create({
  addBorder: {
    borderRightWidth: 1,
    borderRightColor: AUI_COLORS.Silver.hex
  }
});


export {
  TileActions
}