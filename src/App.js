import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col } from 'react-bootstrap'
import { Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Toolbar from './components/Toolbar'

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
      </div>
    );
  }
}

export default App;
