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
import Iframe from 'react-iframe'


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
this.minimize = this.minimize.bind(this)
this.expand = this.expand.bind(this)
this.chat = this.chat.bind(this);
this.noChat = this.noChat.bind(this);
   }
  componentDidMount(){
    function createPopup(){
        var newNode = document.createElement('div');
        newNode.classList.add('happening-now')
        newNode.classList.add('urgent')
        newNode.style.marginLeft = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        newNode.style.marginRight = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        newNode.style.marginTop = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        newNode.style.marginBottom = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        var innerNode = document.createElement('div');
        var textOptions = ["<h4>CRITICAL ERROR #S3X W00RK</h4><br>Your experience goes against our community guidelines. We’ve erased your experience because it goes against our Community Guidelines on nudity or sexual activity. Our Guidelines are based on our traditional upbringing and our board of directors may be too sensitive to see an illustration of an ass.", "<h4>YOUR ACCOUNT HAS BEEN RESTRICTED</h4><br>Thank you for contacting us. I reviewed your account and can see that it is currently restricted to withdrawing funds from your Cash Balance", "<h4>PROHIBITED USE</h4><br>Our Compliance Team identified your account as having sent or received gifts associated with a prohibited use case. We encourage you to find another payments provider as we cannot process future transactions for you. Going forward, any gifts sent to or from your email address will be automatically canceled.<br>Thank you for your understanding.",'<h4>'+Math.floor(almost) + ' seconds until this platform fully self destructs</h4>']
        var text = textOptions[Math.floor(Math.random() * textOptions.length)];
        innerNode.innerHTML = "<div class='top-bar'><button onclick='this.parentNode.parentNode.parentNode.remove()'>✕</button></div><div class='inner-popup'>"+text+'<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">ok</button></div>';
        newNode.appendChild(innerNode);
        // Get the parent node
        var parentNode = document.querySelector('body');

        // Insert the new node before the reference node
        parentNode.insertBefore(newNode, parentNode.firstChild);
      }
     var meow = setInterval(function(){ 
        let unix_timestamp = 1597802422;
        var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        var today = new Date();   
        if(almost < 120 && almost > 118){
          createPopup()
          setTimeout(createPopup,100)
          setTimeout(createPopup,200)
        }
        if(almost < 60 && almost > 78){
          createPopup()
          setTimeout(createPopup,100)
          setTimeout(createPopup,200)
        }
        if(almost < 30 && almost > 28){
          createPopup()
          setTimeout(createPopup,100)
          setTimeout(createPopup,200)
        }
         if(almost < 20 && almost > 18){
          createPopup()
          setTimeout(createPopup,100)
          setTimeout(createPopup,200)
          setTimeout(createPopup,400)
          setTimeout(createPopup,500)
        }
         if(almost < 10 && almost > 8){
          createPopup()
          setTimeout(createPopup,100)
          setTimeout(createPopup,200)
          setTimeout(createPopup,400)
          setTimeout(createPopup,500)
        }
       if(almost <= 0 && almost > -1){
        window.location.href = '/'

       }

      }, 200);



     let unix_timestamp = 1597802422;
    let almost_unix_timestamp = 1597802220;

     var date = new Date(unix_timestamp * 1000);
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var almost_date = new Date(almost_unix_timestamp * 1000);
      var today = new Date();   
     if(today > almost_date && today < date){
      var almost =  unix_timestamp - Math.floor(Date.now() / 1000)

      createPopup()
      if(Math.floor(almost) < 120){
         setTimeout(createPopup,1000)
        setTimeout(createPopup,2000)
      }else if(Math.floor(almost) < 60){
        setTimeout(createPopup,1000)
        setTimeout(createPopup,2000)
        setTimeout(createPopup,3000)
 
      }else if(Math.floor(almost) < 30){
        setTimeout(createPopup,1000)
        setTimeout(createPopup,2000)
        setTimeout(createPopup,3000)
        setTimeout(createPopup,4000)
        setTimeout(createPopup,5000)
  
        
      }else if(Math.floor(almost) < 10){
        createPopup()
        setTimeout(createPopup,1000)
        setTimeout(createPopup,2000)
        setTimeout(createPopup,3000)
        setTimeout(createPopup,4000)
        setTimeout(createPopup,5000)
        setTimeout(createPopup,10000)
        setTimeout(createPopup,12000)
       
      }



     }


    

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
let unix_timestamp = 1597802422;
      let almost_unix_timestamp = 1597802220;
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
                         if(Math.floor(almost) < 120){
                        newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }else if(Math.floor(almost) < 60){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')


                     }else if(Math.floor(almost) < 30){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                     }else if(Math.floor(almost) < 10){
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }

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
                         if(Math.floor(almost) < 120){
                        newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }else if(Math.floor(almost) < 60){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')


                     }else if(Math.floor(almost) < 30){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                     }else if(Math.floor(almost) < 10){
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }

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
  chat(){
    document.getElementsByClassName('chat-room')[0].classList.add("on")
  }
  noChat(){
    document.getElementsByClassName('chat-room')[0].classList.remove("on")
  }
  minimize(){
    var el = document.getElementsByClassName('happening-now')[0];
    el.classList.add('closed')
  }
  expand(){
    var el = document.getElementsByClassName('happening-now')[0];
    el.classList.remove('closed')
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

        var date = new Date(x.fields.StartTime);

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;


        /*alert(str);*/

 
 

		return(
			<a key={x.id} className={x.fields.LinkUrl.includes('http') ? "listing external-link":"listing"} href={x.fields.DownloadFile ?  x.fields.DownloadFile[0].url : x.fields.LinkUrl} download={x.fields.DownloadFile ?  true : false}><span className='posted'>Posted {strTime}  </span><span className='text'>{x.fields.LinkText}</span></a>
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

<Iframe url="https://www.youtube.com/embed/_HbnJ64lu0I"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        <ReactMarkdown source={about[0].fields.OverText}  />
        </div>
        :""}
      </div>
      :""}

    {!cherry ? 
    <div id='pop-up'>
    <div className='inner'>
      <span id='mobile-only'>*Note: we suggest viewing this site on desktop</span>
	    	{about[0] ? 

   				<ReactMarkdown source={about[0].fields.PopupText} />
	    		: "" }
	</div>

	<button onClick={this.popCherry}>Enter</button></div>
	: ""}
    { happenings.length > 0 ? 
       <div className='happening-now'>
       <div className='top-bar'>
        <button onClick={this.minimize}>✕</button>
        <button onClick={this.expand}>+</button>

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
       <div className='chat-room'>
        <button id='no-chat' onClick={this.noChat}>close chat</button>
        <button id='chat-open' onClick={this.chat}>chat</button>
        <iframe src="https://minnit.chat/aaratitest?embed&nickname=" allowtransparency="true"></iframe>
       </div>
    </header>




    );
  }
}

export default Home
