import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import Results from './components/Results'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;
