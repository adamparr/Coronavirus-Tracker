import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      globalData: null
    }
  }

  componentDidMount = () => {
    if (this.state.data == null) this.fetchData();
  }

  fetchData() {
    fetch('http://api.coronastatistics.live/all')
    .then(results => {
      return results.json();
    }).then(globalData => {
      this.setState({ globalData })
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>



      </div>
    );
  }
}
