import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import Global from "./components/sections/Global";
import HistoryLineChart from './components/sections/HistoryLineChart';
import CircularBarChart from './components/sections/CircularBarChart';
import CountriesTable from './components/sections/CountriesTable';
import CasesDistribution from './components/sections/CasesDistribution';
import VirusStats from './components/sections/VirusStats';
import InfoBox from './components/sections/InfoBox';
import moment from 'moment'

import Loading from './components/Loading';

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      globalData: null, 
      globalTimeline: null,
      countriesByCases: null,
      lastUpdated: null
    };
  }

  async componentDidMount() {
    try {
      this.fetchData().then(data => {
        this.updateState(data);
      })

      setInterval(async () => {

        this.fetchData().then(data => {
          this.updateState(data);
        })
      }, 30000)
    } catch(error) {
      console.log(error);
    }
  };

  fetchData() {
    return Promise.all([
      fetch("https://api.coronastatistics.live/all"),
      fetch("https://api.coronastatistics.live/timeline/global"),
      fetch("https://api.coronastatistics.live/countries?sort=cases")
    ]).then(responses => {
      return Promise.all(responses.map(response => {
        return response.json();
      }))
    }).then(data => {
      return data;
    }).catch(err => {
      console.log(err);
    })
  }

  updateState(data) {

    const [globalData, globalTimeline, countriesByCases] = [data[0], data[1], data[2]];

    let lastUpdated = moment.unix( globalData.updated / 1000).fromNow();

    this.setState({
      globalData,
      globalTimeline,
      countriesByCases,
      lastUpdated
    })
  }


  render() {
    if (!this.state.globalData || !this.state.globalTimeline || !this.state.countriesByCases ) return <Loading />
    return (
      <div className="App">
        <Header lastUpdated={this.state.lastUpdated} />
        <Container className="globalStats">
          <Grid container spacing={3} justify="center">
            <Global data={this.state.globalData} timeline={this.state.globalTimeline} />

            <CircularBarChart data={this.state.globalData} />
            <HistoryLineChart timeline={this.state.globalTimeline} />

            <CasesDistribution countryData={this.state.countriesByCases} />
            <VirusStats countryData={this.state.countriesByCases} globalData={this.state.globalData} />
            <InfoBox />

            <CountriesTable data={this.state.countriesByCases} />
          
          </Grid>
        </Container> 
        <Footer />
      </div>
    );
  }
}
