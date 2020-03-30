import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Global from './components/sections/Global'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      globalData: {
        cases: null,
        deaths: null,
        recovered: null,
        updated: null
      },
      globalTimeline: {
        '2020-01-01': {
          cases: null,
          deaths: null,
          recovered: null
        }
      }
    }
  }

  componentDidMount = () => {
    if (this.state.data == null) this.fetchData();
  }

  fetchData() {
    // fetch global stats
    fetch('http://api.coronastatistics.live/all')
    .then(results => {
      return results.json();
    }).then(globalData => {
      this.setState({ globalData })
    })

    // fetch global stats timeline
    fetch('http://api.coronastatistics.live/timeline/global')
    .then(results => {
      return results.json();
    }).then(globalTimeline => {
      this.setState({ globalTimeline })
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Global data={this.state.globalData} timeline={this.state.globalTimeline} />



      </div>
    );
  }
}
