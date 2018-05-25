import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList'
import axios from 'axios'

export default class Series extends Component {

  state = {
    series: []
  }

  componentDidMount() {
    axios.get('http://api.tvmaze.com/search/shows?q=Vikings')
      .then(res => {
        return res.data.forEach(item => {
          this.setState({series: this.state.series.concat(item)})
        })
      })
  }

  render() {
    return (
      <div>

        <SeriesList list={this.state.series}/>
        
      </div>
    )
  }
}
