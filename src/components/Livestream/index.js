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

	

	      /* REDIRECT */
	       if(almost <= 0 ){
	        clearInterval(meow2);

	       }

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
