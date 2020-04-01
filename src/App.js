import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import Global from "./components/sections/Global";
import HistoryLineChart from './components/sections/HistoryLineChart';
import CircularBarChart from './components/sections/CircularBarChart';
import CountriesTable from './components/sections/CountriesTable';

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      globalData: {
        cases: 0,
        deaths: 0,
        recovered: 0,
        updated: 0
      },
      globalTimeline: {
        "2020-01-01": {
          cases: 0,
          deaths: 0,
          recovered: 0
        }
      },
      countriesByCases: [
        {}
      ]
    };
  }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData() {
    // fetch global stats
    fetch("https://api.coronastatistics.live/all")
      .then(results => {
        return results.json();
      })
      .then(globalData => {
        this.setState({ globalData });
      });

    // fetch global stats timeline
    fetch("https://api.coronastatistics.live/timeline/global")
      .then(results => {
        return results.json();
      })
      .then(globalTimeline => {
        this.setState({ globalTimeline });
      });

    // fetch countries sorted by cases
    fetch("http://api.coronastatistics.live/countries?sort=cases")
      .then(results => {
        return results.json();
      })
      .then(countriesByCases => {
        this.setState({ countriesByCases });
      });
  }

  render() {
    return (
      <div className="App">
        <Header lastUpdated={this.state.globalData.updated} />
        <Container className="globalStats">
          <Grid container spacing={3} justify="center">
            <Global
              data={this.state.globalData}
              timeline={this.state.globalTimeline}
            />
            <CircularBarChart data={this.state.globalData} />
            <HistoryLineChart timeline={this.state.globalTimeline} />
            <CountriesTable data={this.state.countriesByCases} />
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}
