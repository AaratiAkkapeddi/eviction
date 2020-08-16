import React, { Component } from 'react';

import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {Navigation} from "../"


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel_slides: [],
      cherry: false,
      about:[],
      dansucks: false,
    };
this.popCherry = this.popCherry.bind(this)
   }
  componentDidMount(){
let unix_timestamp = 1597636800;
      let almost_unix_timestamp = 1597635000;

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    var today = new Date();   
   if(today >= date){

    this.setState({dansucks: true})
   }else{
    this.setState({dansucks: false})
   }



 var date = new Date(unix_timestamp * 1000);
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var almost_date = new Date(almost_unix_timestamp * 1000);
    var today = new Date();   
   if(today > almost_date && today < date){

    var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
    alert(Math.floor(almost/60) + 'minutes until this platform fully self destructs')

   }

  	fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/introduction?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
	      .then(res => res.json())
	      .then(res => {
	        this.setState({ about: res.records })
	      })
	      .catch(error => console.log(error))


  	console.log(localStorage.getItem('seen'))
  	if (localStorage.getItem('seen') == 'true') {
  		this.setState({cherry: true})
      localStorage.setItem('seen', JSON.stringify(true))
    }
  }
  componentDidUpdate(){
let unix_timestamp = 1597636800;
      let almost_unix_timestamp = 1597635000;
    var hList = document.getElementsByTagName('h1');
    if(hList){
      for (var i = hList.length - 1; i >= 0; i--) {

              //1597546800
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var almost_date = new Date(almost_unix_timestamp * 1000);
                var today = new Date();   
               if(today > almost_date){

                var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
                   if(Math.random() > 0.2){
                    var text = hList[i].textContent;
                  var arr = [new RegExp('a',"ig"), new RegExp('b',"ig"), new RegExp('c',"ig"), new RegExp('d',"ig"),new RegExp('e',"ig"),new RegExp('f',"ig"),new RegExp('g',"ig"),new RegExp('h',"ig"),new RegExp('i',"ig"),new RegExp('j',"ig"),new RegExp('k',"ig"),new RegExp('l',"ig"),new RegExp('m',"ig"),new RegExp('n',"ig"),new RegExp('o',"ig"),new RegExp('p',"ig"),new RegExp('q',"ig"),new RegExp('r',"ig"),new RegExp('s',"ig"),new RegExp('t',"ig"),new RegExp('u',"ig"),new RegExp('v',"ig"),new RegExp('w',"ig"),new RegExp('x',"ig"),new RegExp('y',"ig"),new RegExp('z',"ig")]
                     var newtext = text.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                    hList[i].textContent = newtext;
                  }
              }
      }
    }

    var aList = document.getElementsByTagName('a');
    if(aList){
      for (var i = aList.length - 1; i >= 0; i--) {

              //1597546800
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var almost_date = new Date(almost_unix_timestamp * 1000);
                var today = new Date();   
               if(today > almost_date){

                var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
                   if(Math.random() > 0.2){
                    var text = aList[i].textContent;
                  var arr = [new RegExp('a',"ig"), new RegExp('b',"ig"), new RegExp('c',"ig"), new RegExp('d',"ig"),new RegExp('e',"ig"),new RegExp('f',"ig"),new RegExp('g',"ig"),new RegExp('h',"ig"),new RegExp('i',"ig"),new RegExp('j',"ig"),new RegExp('k',"ig"),new RegExp('l',"ig"),new RegExp('m',"ig"),new RegExp('n',"ig"),new RegExp('o',"ig"),new RegExp('p',"ig"),new RegExp('q',"ig"),new RegExp('r',"ig"),new RegExp('s',"ig"),new RegExp('t',"ig"),new RegExp('u',"ig"),new RegExp('v',"ig"),new RegExp('w',"ig"),new RegExp('x',"ig"),new RegExp('y',"ig"),new RegExp('z',"ig")]
                     var newtext = text.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                    aList[i].textContent = newtext;
                  }
              }
      }
    }
    var imgList = document.getElementsByTagName('img');
    if(imgList){
      for (var i = 0; i < imgList.length; i++) {

                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var almost_date = new Date(almost_unix_timestamp * 1000);
                var today = new Date();   
               if(today > almost_date){
                var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
                   if(Math.random() > 0.5){
                    imgList[i].src='fdsfds'

               }

         }

      }

    }

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
   	const {cherry, about, dansucks} = this.state;

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

    <header className="App-header Homepage ">
    <Navigation/>
    {dansucks ?
      <div id='over-modal'>
      {about[0] ? 
        <div>
        
        <ReactMarkdown source={about[0].fields.OverText}  />
        </div>
        :""}
      </div>
      :""}

    {!cherry ? 
    <div id='pop-up'>
    <div className='inner'>
	    	{about[0] ? 

   				<ReactMarkdown source={about[0].fields.PopupText} />
	    		: "" }
	</div>

	<button onClick={this.popCherry}>Enter</button></div>
	: ""}
    { happenings.length > 0 ? 
       <div className='happening-now'>
       <div className='top-bar'>
        <button>✕</button>
        <button>+</button>
        <button></button>
       </div>
       <div className='inner-popup'>
			   <h1 className=''>HAPPENING NOW</h1>
         <div>
         {happenings}
         </div>
         </div>
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
