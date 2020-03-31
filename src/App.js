import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Global from "./components/sections/Global";
import HistoryLineChart from './components/sections/HistoryLineChart';

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
      }
    };
  }

  componentDidMount = () => {
    if (this.state.data == null) this.fetchData();
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
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container className="globalStats">
          <Grid container spacing={3} justify="center">
            <Global
              data={this.state.globalData}
              timeline={this.state.globalTimeline}
            />
            <HistoryLineChart timeline={this.state.globalTimeline} />
          </Grid>
        </Container>
      </div>
    );
  }
}
