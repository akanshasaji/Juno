import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import '../style/Navbar.css';


import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (

    <Navbar bg="#00000" variant="light">
           <NavLink className="navbar-item e1 " activeClassName="is-active" to="/">
              HOME
            </NavLink> 

            <NavLink
              className="navbar-item e1 "
              activeClassName="is-active"
              to="/healthcare">
              HEALTHCARE
            </NavLink> 

            <NavLink
              className="navbar-item e1 "
              activeClassName="is-active"
              to="/education">
              EDUCATION
            </NavLink>

            <NavLink
              className="navbar-item e1 "
              activeClassName="is-active"
              to="/jobs">
              JOBS
            </NavLink>

            <NavLink
              className="navbar-item e1 "
              activeClassName="is-active"
              to="/feedback">
              HELP US GROW!
            </NavLink>

  
    </Navbar>
  );
};

export default NavBar;