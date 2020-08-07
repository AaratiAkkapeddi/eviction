import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactMarkdown from "react-markdown";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel_slides: [],
    };

   }

   render() {
   	const {records} = this.props;
   	const happeningNow = [];
   	const notHappeningNow = [];

   	/* find out if happening now */
   	records.map((x,i)=>{
		if(x.fields.StartTime){
			var d1 = new Date();
	        var d2 = new Date(x.fields.StartTime);

	        if(d2 <= d1){
	          if(x.fields.EndTime){
	            var d3 = new Date(x.fields.EndTime);
	            if(d3 > d1){
	              happeningNow.push(x)
	            } else {
	            	notHappeningNow.push(x)
	            }
	          } else {
	          	notHappeningNow.push(x)
	          }
	        } else{
	        	notHappeningNow.push(x)
	        }
		} else {
			notHappeningNow.push(x)
		}
	})
	const listings = notHappeningNow.length > 0 ? notHappeningNow.map((x,i)=>{
		return(
			<a key={x.id} className="listing" href={x.fields.LinkUrl}>{x.fields.LinkText}</a>
		)
		
	}) : 'loading'

	const happenings = happeningNow.length > 0 ? happeningNow.map((x,i)=>{
		return(
			<a key={x.id} className="listing" href={x.fields.LinkUrl}>
			{ x.fields.Image ? 
			<img src={x.fields.Image[0].url}/> 
			:""}
			<br/>
			{x.fields.LinkText}</a>
		)
		
	}) : []

    return (

    <header className="App-header Homepage">
       <div className='listings'>
         {listings}
       </div>
       { happenings.length > 0 ? 
       <div className='happening-now'>
         HAPPENING NOW
         {happenings}
       </div>
       :""
   		}
    </header>




    );
  }
}

export default Home
