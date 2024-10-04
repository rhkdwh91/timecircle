import React from 'react';
import { Calendar } from 'react-native-calendars';

export default function BigCalendar() {
    return <Calendar current={'2022-03-01'} onDayPress={(day) => {console.log(day);}}/>;
}
