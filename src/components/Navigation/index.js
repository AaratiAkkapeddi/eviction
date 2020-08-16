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

    <nav className='brown-pro'>
       <a href="/">→ Listings</a>
       <a href="/about">→ About</a>
       <a href="/performer-index">→ Performers</a>
       <div className='logo'> E-Viction </div>
    </nav>




    );
  }
}

export default Navigation
