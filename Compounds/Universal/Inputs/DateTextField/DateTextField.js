import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import {
  Container,
  Icons,
  AUI_COLORS,
} from '../../../../Elements/index';
import {
  TextField
} from '../../../../Compounds/index';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from "moment/moment";

class DateTextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDateTimePickerVisible: false
    };
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  render() {
    const {
      label,
      value,
      title,
      onConfirm,
      onCancel,
      minimumDate
    } = this.props;
    return (
      <Container style={{position: 'relative'}}>
        <TouchableNativeFeedback onPress={() => this._showDateTimePicker()}>
          <Container style={styles.iconWrapper} justifyContent={'center'} alignItems={'flex-end'}>
            <Icons
              iconName={'date-range'}
              iconSet={'material-design'}
              iconSize={26}
              iconColor={AUI_COLORS.WalaTeal.hex}
              containerStyles={{marginBottom: 8}}
            />
          </Container>
        </TouchableNativeFeedback>
        <TextField
          label={label}
          value={value}
          title={title}
        />
        {minimumDate ? (
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={(date) => {
              onConfirm(date);
              this._hideDateTimePicker();
            }}
            onCancel={onCancel ? onCancel : this._hideDateTimePicker}
            minimumDate={minimumDate}
          />
        ) : (
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={(date) => {
              onConfirm(date);
              this._hideDateTimePicker();
            }}
            onCancel={onCancel ? onCancel : this._hideDateTimePicker}
          />
        )}
      </Container>
    );
  }
}

DateTextField.defaultProps = {};

DateTextField.propTypes = {
  label: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  value: PropTypes.string,
  title: PropTypes.string,
  onCancel: PropTypes.func,
  minimumDate: PropTypes.object
};

const styles = StyleSheet.create({
  iconWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 4,
    zIndex: 5
  }
});

export {
  DateTextField
}