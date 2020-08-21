import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Iframe from 'react-iframe'
import ReactPlayer from "react-player";
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';


class Livestream extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	on:false
    };

   }


  componentDidMount(){
	    let destruction = 1597975200;
	    let unix_timestamp = destruction - 900;//when redirect happens
	    let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
	    /* DESTRUCTION POPUP GENERATOR */
    function createPopup(){
    	console.log('hi')
        var newNode = document.createElement('div');
        newNode.classList.add('happening-now')
        newNode.classList.add('urgent')
        newNode.style.marginLeft = Math.floor(Math.random() * (150 - (-150)) + -150) + 'px';
        newNode.style.marginRight = Math.floor(Math.random() * (150 - (-150)) + -150) + 'px';
        newNode.style.marginTop = Math.floor(Math.random() * (150 - (-150)) + -15) + 'px';
        newNode.style.marginBottom = Math.floor(Math.random() * (150 - (-150)) + -150) + 'px';
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
	    var almost =  destruction - Math.floor(Date.now() / 1000);
	    if(almost >= destruction){
	    	createPopup();
	    	setTimeout(createPopup,1000)
        	setTimeout(createPopup,2000)
	    }



	      var meow = setInterval(function(){ 
	        let destruction = 1597975200;
	        let unix_timestamp = destruction - 900;//when redirect happens
	        let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
	        var almost =  destruction - Math.floor(Date.now() / 1000)
	        // Create a new JavaScript Date object based on the timestamp
	        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
	        var date = new Date(unix_timestamp * 1000);
	        var today = new Date();   
	    
  


	      /* REDIRECT */
	       if(almost <= 0 ){
	        window.location.href = '/destruction'

	       }

	      }, 200);

	      var meow2 = setInterval(function(){ 
	        let destruction = 1597975200;
	        let unix_timestamp = destruction - 900;//when redirect happens
	        let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
	        var almost =  destruction - Math.floor(Date.now() / 1000)
	        // Create a new JavaScript Date object based on the timestamp
	        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
	        var date = new Date(unix_timestamp * 1000);
	        var today = new Date();   
	    
    /* DECAY POPUPS */
	        createPopup()
	

	      /* REDIRECT */
	       if(almost <= 0 ){
	        clearInterval(meow2);

	       }

	        if(almost < 120 ){
	          createPopup()
	          setTimeout(createPopup,1000)
	          setTimeout(createPopup,2000)
	        }
	        if(almost < 60 ){
	          createPopup()
	          setTimeout(createPopup,1000)
	          setTimeout(createPopup,2000)
	          setTimeout(createPopup,1000)
	          setTimeout(createPopup,2000)
	          setTimeout(createPopup,1000)
	          setTimeout(createPopup,2000)
	          setTimeout(createPopup,1000)
	          setTimeout(createPopup,2000)
	          setTimeout(createPopup,1000)
	          setTimeout(createPopup,2000)
	        }

	      }, 3000);


	}

   render() {



    return (

    <div id='livestream' className='brown-pro livestream-container'>
      <h1> Livestream</h1>
   
      
		<TwitchEmbed
        channel="veilmachine"
        id="livestream"
        theme="dark"
        withChat={false}
        onVideoPause={() => console.log(':(')}
      />
    </div>




    );
  }
}

export default Livestream
