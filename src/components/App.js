import React, {Component} from 'react';
import Intro from './Intro'
import Series from '../containers/Series/Series'

export default class App extends Component {

  

  render() {
    return (

      <div>
        <h4>TV-Series</h4>
        <Intro message="Here you can find all your moust loved TV-series"/>
        <Series />
      </div>

    )
  }
}

