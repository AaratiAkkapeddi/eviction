import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Iframe from 'react-iframe'
import ReactMarkdown from "react-markdown";

class Destruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	on:false,
    	about: []
    };

   }
  componentDidMount(){
  	 fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/introduction?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
  	      .then(res => res.json())
  	      .then(res => {
  	        this.setState({ about: res.records })
  	      })
  	      .catch(error => console.log(error))
  }

   render() {
   	const {about} = this.state


    return (

    <div className='brown-pro livestream-container'>
     {about[0] ? 
       <ReactMarkdown source={about[0].fields.OverText} />
     :""}

    </div>




    );
  }
}

export default Destruction
