import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactMarkdown from "react-markdown";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: [],
    };

   }
    componentDidMount() {
	    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/introduction?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
	      .then(res => res.json())
	      .then(res => {
	        this.setState({ about: res.records })
	      })
	      .catch(error => console.log(error))
	  }

   render() {
   	const {about} = this.state;

    return (

    <header className="App-header Homepage">
       { about.length > 0 ? 
       <div className='about'>
         <ReactMarkdown source={about[0].fields.About} />
       </div>
       :""
   		}
    </header>




    );
  }
}

export default About
