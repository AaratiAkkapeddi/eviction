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
      componentDidUpdate(){
var linkList = document.getElementsByClassName('about')[0];
    var otherlinks = linkList.getElementsByTagName('a')

    if(otherlinks){
    for (var i = 0; i < otherlinks.length; i++) {

         otherlinks[i].target = "_blank";
     
    }
  }
  }

   render() {
   	const {about} = this.state;

    return (

    <header className="App-header Homepage">
       { about.length > 0 ? 
       <div className='about section'>
         <ReactMarkdown source={about[0].fields.About} />
       </div>
       :""
   		}
    </header>




    );
  }
}

export default About
