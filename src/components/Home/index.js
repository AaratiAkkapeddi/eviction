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

  componentDidUpdate(){
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
     if(!links[i].download){
         links[i].target = "_blank";
     }
    }
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
	              notHappeningNow.push(x)
	            } else {
	            	// notHappeningNow.push(x)
	            }
	          } else {
	          	notHappeningNow.push(x)
	          }
	        } else{
	        	// notHappeningNow.push(x)
	        }
		} else {
			notHappeningNow.push(x)
		}
	})


	const listings = notHappeningNow.length > 0 ? notHappeningNow.map((x,i)=>{

		return(
			<a key={x.id} className="listing" href={x.fields.DownloadFile ?  x.fields.DownloadFile[0].url : x.fields.LinkUrl} download={x.fields.DownloadFile ?  true : false}>{x.fields.LinkText}</a>
		)
		
	}) : 'loading'

	const happenings = happeningNow.length > 0 ? happeningNow.map((x,i)=>{
		return(
			<a key={x.id} className="happening-listing" href={x.fields.LinkUrl}>
			{ x.fields.Image ? 
				<div>
			<img src={x.fields.Image[0].url}/> 

			</div>
			:""}
			
			</a>
		)
		
	}) : []

    return (

    <header className="App-header Homepage">
    { happenings.length > 0 ? 
       <div className='happening-now'>
         <div className='marquee'>
         <div>
			<h1>HAPPENING NOW</h1>
			<h1>HAPPENING NOW</h1>
         </div></div>
         {happenings}
       </div>
       :""
   		}
       <div className='listings'>
         {listings}
       </div>
       
    </header>




    );
  }
}

export default Home
