import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col } from 'react-bootstrap'
import { Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Toolbar from './components/Toolbar'
import Posts from './components/Posts'

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Posts />
      </div>
    );
  }
}

export default App;
