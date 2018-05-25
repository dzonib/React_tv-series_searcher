import React from 'react';
import { SeriesItem } from './SeriesItem';

const SeriesList = props => {
  return (
    <div>
      <ol>
        {props.list.map((s, i) => {
          return <SeriesItem key={i} {...s}/>;
        })}
      </ol>
    </div>
  );
};

export default SeriesList;
