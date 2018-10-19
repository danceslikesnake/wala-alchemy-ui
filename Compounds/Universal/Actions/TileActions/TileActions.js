import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, StyleSheet } from 'react-native';
import {
  Container,
  Divider,
  Icons,
  Spacer,
  Caption,
  AUI_COLORS,
} from '../../../../Elements/index';
import { CountryInput } from '../../../../Compounds/index';
import {
  AUI_FUNCTIONS
} from "../../../../Helpers/index";

class TileActions extends Component {
  state = {
    tileArray: [],
    forcedWidth: null,
    cca2: null
  }

  componentDidMount() {
    this.propsToState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.propsToState(nextProps);
  }

  propsToState = props => {
    const { tiles, rowCount } = props;
    // set any toggle state variables
    tiles.map((obj, idx) => {
      if (obj.iconToggle) {
        let addVar = {};
        addVar['tile_' + idx + '_toggle'] = obj.iconToggle.initialToggleState;
        this.setState(addVar);
      }
    });

    // chunk the tiles according to rowcount
    const tilesToChunks = this._arrayChunk(tiles, rowCount);
    this.setState({
      tileArray: tilesToChunks,
      forcedWidth: 100 / rowCount + '%',
    });
  };

  _arrayChunk = (myArray, chunk_size) => {
    let results = [];

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
              {backgroundColor: 'white', height: this.props.dense ? AUI_FUNCTIONS.gridBaseMultiplier(7, true) : AUI_FUNCTIONS.gridBaseMultiplier(6)},
              addBorder ? localStyles.addBorder : null
            ]}
          >
            <CountryInput
              tileSelector
              searchable
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
  };

  _renderTile = (tile, idx2, addBorder) => {
    if(tile.specialTile) {
      return this._renderSpecialTiles(tile.specialTile, tile.specialTileOptions, idx2, addBorder);
    } else {
      return (
        <TouchableNativeFeedback key={idx2} onPress={() => {
          tile.onPress();
          if(tile.iconToggle) {
            let updateVar = {};
            updateVar['tile_' + idx2 + '_toggle'] = !this.state['tile_' + idx2 + '_toggle'];
            this.setState(updateVar);
          }
        }}>
          <Container
            isFlex
            alignItems={'center'}
            justifyContent={'center'}
            style={[
              {height: this.props.dense ? AUI_FUNCTIONS.gridBaseMultiplier(7, true): AUI_FUNCTIONS.gridBaseMultiplier(6), backgroundColor: 'white'},
              addBorder ? localStyles.addBorder : null
            ]}
          >
            <Icons
              iconName={
                tile.iconToggle ?
                  (this.state['tile_' + idx2 + '_toggle'] ? tile.iconToggle.activeIcon : tile.iconToggle.inActiveIcon)
                  : tile.iconName
              }
              iconSet={
                tile.iconToggle ? (
                  this.state['tile_' + idx2 + '_toggle'] ? tile.iconToggle.activeIconSet : tile.iconToggle.inActiveIconSet
                ) : (tile.iconSet ? tile.iconSet : 'wala')
              }
              iconSize={this.props.dense ? 21 : 26}
              iconColor={AUI_COLORS.WalaTeal.hex}
            />
            {!this.props.dense ? <Spacer dense /> : null}
            <Caption
              dense={this.props.dense}
              color={AUI_COLORS.WalaTeal.shade2}
              style={this.props.dense ? {marginTop: 3, marginBottom: -3} : null}
            >
              {tile.label.toUpperCase()}
            </Caption>
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
  rowCount: PropTypes.oneOf([1, 2, 3]),
  backgroundColor: PropTypes.string,
  dense: PropTypes.bool
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