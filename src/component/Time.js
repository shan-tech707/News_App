import React,{useState} from 'react';
import {Text} from 'react-native';

import moment from 'moment'

const Time = ({time,...rest}) => {
    const [date, setDate] = useState(time);
    const t=moment(date || moment.now()).fromNow();
  return (
      <Text style={{color:'#fff'}}> {t}</Text>
  );
};

export default Time;
