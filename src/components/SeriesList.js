import React from 'react';

const SeriesList = props => {
  return (
    <div>
    <ol>
    {props.list.map( (s, i) => {
      return (
        <li key={i}>
          {s.show.name}
        </li>
      )
      })}
    </ol>
  
    
    </div>
  )
}

export default SeriesList