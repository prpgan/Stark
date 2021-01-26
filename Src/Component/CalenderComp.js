import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';


const CalenderComp =()=> {
    const[selected, setSelected] =  useState(undefined)

    const onDayPress = (day) => {
        alert(JSON.stringify(day))
        setSelected(day.dateString);
    }

    return (
        <View>
        <Calendar
          style={styles.calendar}
          hideExtraDays
          enableSwipeMonths
          onDayPress={onDayPress}
          markedDates={{[selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  }
});


export default CalenderComp;