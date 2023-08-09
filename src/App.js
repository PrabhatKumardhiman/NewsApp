import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import NewsContainer from "./component/NewsContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// will not work on any other port rather than localhost
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      progress : 0 
    }
  }

  setProgress=(progress)=>{
    this.setState({
      progress : progress
    })
  }

  render() {
    return (
      <Router>
        <div>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
          />
          <Navbar title="NewsMonk"></Navbar>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsContainer apiKey={process.env.REACT_APP_API_KEY}
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={20}
                  country="in"
                  category="general"
                ></NewsContainer>
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <NewsContainer apiKey={process.env.REACT_APP_API_KEY}
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={20}
                  country="in"
                  category="business"
                ></NewsContainer>
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <NewsContainer apiKey={process.env.REACT_APP_API_KEY}
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={20}
                  country="in"
                  category="entertainment"
                ></NewsContainer>
              }
            ></Route>
            <Route
              key="health"
              exact
              path="/health"
              element={
                <NewsContainer apiKey={process.env.REACT_APP_API_KEY}
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={20}
                  country="in"
                  category="health"
                ></NewsContainer>
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <NewsContainer apiKey={process.env.REACT_APP_API_KEY}
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={20}
                  country="in"
                  category="science"
                ></NewsContainer>
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <NewsContainer apiKey={process.env.REACT_APP_API_KEY}
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={20}
                  country="in"
                  category="sports"
                ></NewsContainer>
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <NewsContainer apiKey={process.env.REACT_APP_API_KEY}
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={20}
                  country="in"
                  category="technology"
                ></NewsContainer>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
