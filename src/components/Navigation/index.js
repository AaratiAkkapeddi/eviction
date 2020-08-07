import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

   }

   render() {



    return (

    <nav class='brown-pro'>
       <a href="/">Home</a>
       <a href="/about">About</a>
       <a href="/performer-index">Performers</a>
    </nav>




    );
  }
}

export default Navigation
