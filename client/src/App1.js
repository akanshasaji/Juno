import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import NavBar from './components/Navbar';
import Home from './components/Home.js';
import Health from './components/Healthcare.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Job from './components/Jobs.js';
import Edu from './components/Education.js';
import Feedback from './components/Feedback.js';


import './App1.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { render } from '@testing-library/react';

function App1() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/healthcare">
            <Health />
          </Route>
          <Route path="/education">
            <Edu />
          </Route>
          <Route path="/jobs">
            <Job />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App1;


