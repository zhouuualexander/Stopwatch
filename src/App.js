import React, { Component } from 'react';
import StopWatch from './Components/StopWatch/StopWatch';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {
  render() {

    return (

      <div>
        <CssBaseline />
        <StopWatch />

      </div>
    );
  }
}


export default App;
