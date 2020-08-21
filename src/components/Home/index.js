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
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
import ReactPlayer from "react-player";

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
    let destruction = 1598068799;
    let unix_timestamp = destruction - 900;//when redirect happens
    let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
     /* DECAY POPUP GENERATOR */
      function createPopup(){
        var newNode = document.createElement('div');
        newNode.classList.add('happening-now')
        newNode.classList.add('urgent')
        newNode.style.marginLeft = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        newNode.style.marginRight = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        newNode.style.marginTop = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        newNode.style.marginBottom = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        var innerNode = document.createElement('div');
        var textOptions = ['<h4>!!! WARNING !!!</h4><br>you\'re almost there, just a little bit further<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">keep going</button>', '<h4>WHAT\'S WRONG, SWEETIE?</h4><br>you\'re not giving up now, are you?<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">keep looking</button>', '<h4>UPDATE</h4><br>there\'s more to be found if you know where to look<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">keep looking</button>', '<h4>ALMOST THERE</h4><br>so close you can almost taste it.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">ok</button>', '<h4>SATISFACTION THIS WAY</h4><br>you want to feel good, don\'t<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">let me cum</button>', '<h4>Unveil the Veil</h4><br> The reveal is in the hiding. The hiding works to reveal. <br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">unveil us</button>', '<h4>Keep Looking</h4><br>we\'ll make it worth your while, darling<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">find it</button>', '<h4>U WANT A$$</h4><br>"A$$ / B00BIES / CH@0S if you know where to look"<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">look for us</button>', '<h4>s0 cl0s3</h4><br>you haven\'t gotten what you came here for, sweetie.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">get it before it\'s gone</button>', '<h4>cum on be a good boy</h4><br>be a good boy and sniff us out<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">sniff sniff</button>']
        var text = textOptions[Math.floor(Math.random() * textOptions.length)];
        innerNode.innerHTML = "<div class='top-bar'><button onclick='this.parentNode.parentNode.parentNode.remove()'>✕</button></div><div class='inner-popup'>"+text+'</div>';
        newNode.appendChild(innerNode);
        // Get the parent node
        var parentNode = document.querySelector('body');

        // Insert the new node before the reference node
        parentNode.insertBefore(newNode, parentNode.firstChild);
      }
    /* END DECAY POPUP GENERATOR */
           /* INTERVAL */
     var meow = setInterval(function(){ 
        let destruction = 1598068799;
        let unix_timestamp = destruction - 900;//when redirect happens
        let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
        var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        var today = new Date();   
        /* DECAY POPUPS */
        // createPopup()
        // setTimeout(createPopup,1000)
        // setTimeout(createPopup,2000)

        // if(almost < 120 && almost > 118){
        //   createPopup()
        //   setTimeout(createPopup,1000)
        //   setTimeout(createPopup,2000)
        // }
        // if(almost < 60 && almost > 780){
        //   createPopup()
        //   setTimeout(createPopup,1000)
        //   setTimeout(createPopup,2000)
        // }


        if(almost_unix_timestamp - Math.floor(Date.now() / 1000) <= 0){
          var happening = document.getElementsByClassName('happening-now-livestream')[0]
          if(happening){
            happening.classList.remove('off')
          }
        }
      /* REDIRECT */
       if(almost <= 0 ){
        window.location.href = '/livestream'

       }

      }, 200);





     var date = new Date(unix_timestamp * 1000);
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var almost_date = new Date(almost_unix_timestamp * 1000);
      var today = new Date();   
     if(today > almost_date && today < date){
      var almost =  unix_timestamp - Math.floor(Date.now() / 1000)

        // createPopup()
        // setTimeout(createPopup,3000)
      //   setTimeout(createPopup,2000)


      // if(Math.floor(almost) < 120){
      //    setTimeout(createPopup,1000)
      //   setTimeout(createPopup,2000)
      // }else if(Math.floor(almost) < 60){
      //   setTimeout(createPopup,1000)
      //   setTimeout(createPopup,2000)
      //   setTimeout(createPopup,3000)
      // }


 var meow2 = setInterval(function(){ 
          let destruction = 1598068799;
          let unix_timestamp = destruction - 900;//when redirect happens
          let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
          var almost =  destruction - Math.floor(Date.now() / 1000)
          // Create a new JavaScript Date object based on the timestamp
          // multiplied by 1000 so that the argument is in milliseconds, not seconds.
          var date = new Date(unix_timestamp * 1000);
          var today = new Date();   
      
    /* DECAY POPUPS */

  

        /* REDIRECT */
         // if(almost <= 0 ){
         //  clearInterval(meow2);

         // }

          if(almost < 900 ){
            createPopup()
            setTimeout(createPopup,15000)
            setTimeout(createPopup,15000 * 2)
            setTimeout(createPopup,15000 * 3)
            setTimeout(createPopup,15000 * 4)
            setTimeout(createPopup,15000 * 5)
            setTimeout(createPopup,15000 * 6)
            setTimeout(createPopup,15000 * 7)
            setTimeout(createPopup,15000 * 8)
            setTimeout(createPopup,15000 * 9)
            setTimeout(createPopup,15000 * 10)
            setTimeout(createPopup,15000 * 11)
            setTimeout(createPopup,15000 * 12)
            setTimeout(createPopup,15000 * 13)
            setTimeout(createPopup,15000 * 14)
            setTimeout(createPopup,15000 * 15)
            setTimeout(createPopup,15000 * 16)
            setTimeout(createPopup,15000 * 17)
            setTimeout(createPopup,15000 * 18)
            setTimeout(createPopup,15000 * 19)
            setTimeout(createPopup,15000 * 20)

          }else if(almost < 300 ){
            createPopup()
            setTimeout(createPopup,3000)
            setTimeout(createPopup,3000 * 2)
            setTimeout(createPopup,3000 * 3)
            setTimeout(createPopup,3000 * 4)
            setTimeout(createPopup,3000 * 5)
            setTimeout(createPopup,3000 * 6)
            setTimeout(createPopup,3000 * 7)
            setTimeout(createPopup,3000 * 8)
            setTimeout(createPopup,3000 * 9)
            setTimeout(createPopup,3000 * 10)
            setTimeout(createPopup,3000 * 11)
            setTimeout(createPopup,3000 * 12)
            setTimeout(createPopup,3000 * 13)
            setTimeout(createPopup,3000 * 14)
            setTimeout(createPopup,3000 * 15)
            setTimeout(createPopup,3000 * 16)
            setTimeout(createPopup,3000 * 17)
            setTimeout(createPopup,3000 * 18)
            setTimeout(createPopup,3000 * 19)
            setTimeout(createPopup,3000 * 20)
          }else{
            createPopup()
          }


        }, 60000);

     }


    

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    var today = new Date();   
   if(today >= date){

    this.setState({dansucks: false})
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

      let destruction = 1598068799;
      let unix_timestamp = destruction - 900;//when redirect happens
      let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens

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
                         if(Math.floor(almost) < 1200){
                        newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }else if(Math.floor(almost) < 600){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')


                     }else if(Math.floor(almost) < 300){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                     }else if(Math.floor(almost) < 100){
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
                         if(Math.floor(almost) < 1200){
                        newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }else if(Math.floor(almost) < 600){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')


                     }else if(Math.floor(almost) < 300){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                     }else if(Math.floor(almost) < 100){
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
         <a href='/livestream'>
          <div id='livestream-little' className='happening-listing happening-now-livestream off'>
             <TwitchEmbed
              channel="veilmachine"
              id="livestream-little"
              theme="dark"
              muted
              withChat={false}
              onVideoPause={() => console.log(':(')}
            />
        </div>
        </a>
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
