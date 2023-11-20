import moment, {Moment} from 'moment';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CalendarPicker, {
  DateChangedCallback,
} from 'react-native-calendar-picker';

interface CalendarPickerState {
  selectedStartDate: Moment | null;
  selectedEndDate: Moment | null;
}

export default class MyCalendarPicker extends Component<
  {},
  CalendarPickerState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date: Moment, type: string) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const {selectedStartDate, selectedEndDate} = this.state;
    const minDate = moment().toDate(); // Convert Moment to Date
    const maxDate = moment('2017-07-03').toDate(); // Convert Moment to Date
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
          months={[
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
          ]}
          previousTitle="Anterior"
          nextTitle="Próximo"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={this.onDateChange as DateChangedCallback}
        />

        <View>
          <Text>SELECTED START DATE: {startDate}</Text>
          <Text>SELECTED END DATE: {endDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});
