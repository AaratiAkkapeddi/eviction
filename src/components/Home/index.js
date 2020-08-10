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
      cherry: false,
    };
this.popCherry = this.popCherry.bind(this)
   }
  componentDidMount(){
  	console.log(localStorage.getItem('seen'))
  	if (localStorage.getItem('seen') == 'true') {
  		this.setState({cherry: true})
      localStorage.setItem('seen', JSON.stringify(true))
    }
  }
  componentDidUpdate(){
    var links = document.getElementsByClassName('external-link');
    var otherlinks = document.body.querySelector('.link-list a');
    for (var i = 0; i < links.length; i++) {

         links[i].target = "_blank";
     
    }
    if(otherlinks){
    for (var i = 0; i < otherlinks.length; i++) {

         otherlinks[i].target = "_blank";
     
    }
	}
  }

  popCherry(){
  this.setState({cherry: true})
  localStorage.setItem('seen', JSON.stringify(true))

}
   render() {
   	const {records} = this.props;
   	const {cherry} = this.state;

   	const happeningNow = [];
   	const notHappeningNow = [];

   	/* find out if happening now */
   	records.map((x,i)=>{
   		if(x.fields.LinkUrl){
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
	}
	})


	const listings = notHappeningNow.length > 0 ? notHappeningNow.map((x,i)=>{

		return(
			<a key={x.id} className={x.fields.LinkUrl.includes('http') ? "listing external-link":"listing"} href={x.fields.DownloadFile ?  x.fields.DownloadFile[0].url : x.fields.LinkUrl} download={x.fields.DownloadFile ?  true : false}>{x.fields.LinkText}</a>
		)
		
	}) : 'loading'

	const happenings = happeningNow.length > 0 ? happeningNow.map((x,i)=>{


		return(

			<a key={x.id} className={x.fields.LinkUrl.includes('http') ? "happening-listing external-link":"happening-listing"} href={x.fields.LinkUrl}>
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
    {!cherry ? 
    <div id='pop-up'>
    <div className='inner'>
	    	Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.

	Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

	Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.
	    </div><button onClick={this.popCherry}>Enter</button></div>
	: ""}
    { happenings.length > 0 ? 
       <div className='happening-now'>
         <div className='marquee'>
         <div>
			<h1>HAPPENING NOW HAPPENING NOW</h1>
			<h1>HAPPENING NOW HAPPENING NOW</h1>
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
