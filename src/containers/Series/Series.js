import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader'
import axios from 'axios';

export default class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  };

  searchHandler = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    console.log(this.state.series);
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(res => {
        this.setState(() => ({
          series: res.data,
          isFetching: false
        }));
      });
  };

  render() {
    const { series, seriesName, isFetching } = this.state;

    return (
      <div>
        <div>
          <input type="text" value={seriesName} onChange={this.searchHandler} />
        </div>
        {!isFetching && series.length === 0 &&
          seriesName.trim() === '' && (
            <p>Please enter series name in the input</p>
          )}
        {!isFetching && series.length === 0 &&
          seriesName !== '' && (
            <p>No tv series have been found with that name!</p>
          )}
        {isFetching && <Loader />}
        {!isFetching && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}
