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
	    let destruction = 1598068799;
	    let unix_timestamp = destruction - 900;//when redirect happens
	    let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
	    /* DESTRUCTION POPUP GENERATOR */
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
        var textOptions = ['<h4>LOOKING FOR HORNY SINGLES IN YOUR AREA?</h4><br>17 wet hot horny singles waiting 4 you! click below to see just how they want to be watched ~<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">WATCH</button>', '<h4>PROHIBITED USE</h4><br>GiftRocket\'s Compliance Team identified your account as having sent or received gifts associated with a prohibited use case. We encourage you to find another payments provider as we cannot process future transactions for you. Going forward, any gifts sent to or from your email address will be automatically canceled.Thank you for your understanding.GiftRocket Compliance<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">i\'m sorry?</button>', '<h4>CRITICAL ERROR #S3X W00RK</h4><br>Your experience goes against our community guidelines. We’ve erased your experience because it goes against our Community Guidelines on nudity or sexual activity. Our Guidelines are based on our traditional upbringing and our board of directors may be too sensitive to see an illustration of an ass.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">See Some More ASs</button>', '<h4>CRITICAL ERROR: YOU\'VE FALLEN IN LOVE WITH A WH0RE</h4><br>You’ve reached the end. Did you find what you were looking for? Did you get what your mouth watered for, what your body twitched for?Well that’s it. “You don’t have to go home but you can’t stay here.” How many times have we heard that….<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">But What We Have is Real!</button>', '<h4>CUM MAKE IT WITH ME</h4><br>Reasons to move away from a space: there’s no need to stay—I’ve left something there, outside, that used to be here, inside—I’ve left something there that can grow, develop, on its own. Reasons to move: I can move with an easy mind—what’s left behind is safe, in storage.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">GO BACK</button>', '<h4>NOTICE NOTICE NOTICE NOTICENOTICENOTICE</h4><br>ERROR #MPF1-800-776-7786 YOUR COMPUTER HAS TESTED POSITIVE FOR CORONAVIRUS. PLEASE CONSIDER RUNNING MALWARE DETECTION IMMEDIATELY.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">BACK TO SAFETY</button>', '<h4>DEAR DICK</h4><br>YOU NEED US; "Someone falls in love and in a universe that once was closed, suddenly everything seems possible. Love and sex are mediums for semiotizing mutation.” <br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">MUTATE ME</button>', '<h4>H@ve Y0u F0rg0tt3n?</h4><br>that you are NOTHING without desire, without hunger, without will. that your desire is gravitous; it\'s its own entity that continually pulls the physicality of who you ARE and who you KNOW YOURSELF TO BE into the potential of who you COULD be. DESIRE is the state of BECOMING that turns you into a site  of PRODUCTION.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">PRODUCE</button>', '<h4>Do you think you\'re ready?</h4><br>To Become the new flesh? are you available for the new world order?<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">Join Us</button>', '<h4>!!Your System Has Experienced a Glitch!!</h4><br> Fortunately, the short-lived break in this overwhelming digital system is where we can reimagine all possible realities, both dystopian and utopian. Leave established action scripts and join the avant-garde of the unknown. It is only as real as you allow<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">ALLOW ACCESS</button>','<h4>.decrim not found</h4><br>This system failed to start. An important component .decrim is missing. Try reimagining the world as it is and the error may be fixed. No promises though.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">decriminalize sex work?</button>', '<h4>CRITICAL ERROR: YOU\'VE FALLEN IN LOVE WITH A WH0RE</h4><br>I thought you really liked me!! I thought this was about more than just the money<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">This is only as real as you allow it to be</button>', '<h4>WARNING!! Infection(s) found!!</h4><br>Unwanted Anti-Trafficking viruses have been detected in your system. You will be "saved." Actually, you will be abolished.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">ok?</button>', '<h4>Your Existence May Be Deleted ERROR 104 - Please verify your identity.</h4><br>"Some of your previous actions didn\'t follow our Community Guidelines. If you learn and follow our guidelines, you can prevent your existence from being deleted.  Except that we enforce our guidelines however we please, so you\'ll never really know if you\'re crossing the line. You\'ll just keep going like this, always in fear of that day when you\'ll be shut down, never really knowing when that day will come.  If you think we\'re making a mistake, well, that\'s too bad, isn\'t it? Because you can\'t do a single thing about it. That\'s right. You can\'t do anything to stop us.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">Wait, nothing??</button>', '<h4>PRIVACY ERROR</h4><br>Warning! Your privacy has been breached. Your connection is not secure.Just kidding!!! Privacy? In this day and age?? Hahahahaha<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">As if!</button>', '<h4>ERROR 104 - Please verify your identity.</h4><br>"That can\'t be your real name. Is it? Why don\'t you tell me your real name? You know my real name."<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">Oh, it\'s real alright</button>','<h4>Storage Almost Full!</h4><br>You have 0.01 GB of space left in your autonomous digital world. Corporations with more money than most medium-sized nations are taking over the internet. Just give up.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">Noooo!</button>',
]
        var text = textOptions[Math.floor(Math.random() * textOptions.length)];
        innerNode.innerHTML = "<div class='top-bar'><button onclick='this.parentNode.parentNode.parentNode.remove()'>✕</button></div><div class='inner-popup'>"+text+'</div>';
        newNode.appendChild(innerNode);
        // Get the parent node
        var parentNode = document.querySelector('body');

        // Insert the new node before the reference node
        parentNode.insertBefore(newNode, parentNode.firstChild);
      }
    /* END DECAY POPUP GENERATOR */

/******/
          var almost =  destruction - Math.floor(Date.now() / 1000)
          // Create a new JavaScript Date object based on the timestamp
          // multiplied by 1000 so that the argument is in milliseconds, not seconds.
          var date = new Date(unix_timestamp * 1000);
          var today = new Date();   
           if(almost < 900 ){
            createPopup()
            setTimeout(createPopup,15000)
            setTimeout(createPopup,15000 * 2)
            setTimeout(createPopup,15000 * 3)
            setTimeout(createPopup,15000 * 4)


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

          }else{
            // createPopup()
          }
 /******/ 



	      var meow = setInterval(function(){ 
	        let destruction = 1598068799;
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
	        let destruction = 1598068799;
	        let unix_timestamp = destruction - 900;//when redirect happens
	        let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
	        var almost =  destruction - Math.floor(Date.now() / 1000)
	        // Create a new JavaScript Date object based on the timestamp
	        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
	        var date = new Date(unix_timestamp * 1000);
	        var today = new Date();   
	    
    /* DECAY POPUPS */

		console.log('meow')

	      /* REDIRECT */
	       if(almost <= 0 ){
	        clearInterval(meow2);

	       }
	       console.log('hi')
	        if(almost < 900 ){
	          createPopup()
	          setTimeout(createPopup,15000)
	          setTimeout(createPopup,15000 * 2)
	          setTimeout(createPopup,15000 * 3)
	          setTimeout(createPopup,15000 * 4)


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
	    
	        }else{
	          // createPopup()
	        }


	      }, 60000);


	}

   render() {



    return (
      <div>
<h1 className='livestream-title'>CLOSING PARTY a taboo is the fetishization of a limit FETISHIZE CENSORSHIP AND CUM WITH US</h1>
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
</div>



    );
  }
}

export default Livestream
