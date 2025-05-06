import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  state = {
    progress: 10,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar color="pink" progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key=""
                pageSize={5}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                pageSize={5}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={5}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={5}
                country="us"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={5}
                country="us"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={5}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={5}
                country="us"
                category="science"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
