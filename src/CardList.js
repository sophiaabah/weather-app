import React from 'react';
import Card from './Card';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CardList = ({ flip, timeArray, dayArray }) => {
  return (
    <div className='mar'>
      {
        (flip ? timeArray : dayArray).map((item, i) => {
          return (
            <Card
              key={i}
              temp={Math.round(item.main.temp)}
              header={flip ? (item.dt_txt).substring(11, 16) : days[new Date(item.dt_txt).getDay()]}
            />
          );
        })
      }
    </div>
  )
}

export default CardList;