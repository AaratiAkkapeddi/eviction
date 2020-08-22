

import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Slider from '../Slider'
import {Navigation} from "../"

class PerformerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records:[],
      about: []
    };
   }

  componentDidMount() {
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
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        var today = new Date();   
        var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.

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



      /* REDIRECT */
       if(today >= date){
        clearInterval(meow)
        window.location.href = '/livestream'

       }
      }, 500);


 var date = new Date(unix_timestamp * 1000);

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var almost_date = new Date(almost_unix_timestamp * 1000);
    var today = new Date();   
   if(today > almost_date && today < date){
    var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
    if(today > almost_date && today < date){
      var almost =  unix_timestamp - Math.floor(Date.now() / 1000)

        // createPopup()
        // setTimeout(createPopup,4000)
        // setTimeout(createPopup,10000)
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

        /* REDIRECT */
         if(almost <= 0 ){
        window.location.href='/destruction'

         }

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


      // if(Math.floor(almost) < 120){
      //    setTimeout(createPopup,1000)
      //   setTimeout(createPopup,2000)
      // }else if(Math.floor(almost) < 60){
      //   setTimeout(createPopup,1000)
      //   setTimeout(createPopup,2000)
      //   setTimeout(createPopup,3000)
      // }




     }

   }
    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/performers?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
      .then(res => res.json())
      .then(res => {
        this.setState({ records: res.records })
      })
      .catch(error => console.log(error))

      fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/introduction?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          this.setState({ about: res.records })
        })
        .catch(error => console.log(error))
  }
  componentDidUpdate(){

  }
   render() {
    const {records, about} = this.state;

  const listings = records.length > 0 ? records.map((x,i)=>{
    if(x.fields.Image){
      var styles = {
        "backgroundImage": "url("+ x.fields.Image[0].url+")"
      }
  } else {
    var styles = {}
  }
    return(
      <a key={x.id} className="performer-listing" href={"/performer/"+ x.fields.slug}>
          {x.fields.Image ? 


                    <div style={styles} className='performer-card'></div>


                  
                : "" }
      <span>{x.fields.Name}</span>
      </a>
    )
    
  }) : 'loading'



    return (

    <header className="App-header performer">
    <Navigation/>
       <div className='performer-listings'>
       <Slider
            options={{
              autoPlay: 4000,
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              draggable:false,
              pageDots: false,
              arrowShape:"M29.94,56.65c-9.4-9.27-19.28-19.16-28.5-27.89L29.89.71M1.44,28.76l47,.06",
              adaptiveHeight: false,
            }}
          >
                    {listings}
          </Slider>

         <br/>
         {about[0] ? 

          <ReactMarkdown source={about[0].fields.Schedule} />
          : "" }
       </div>

    </header>




    );
  }
}

export default PerformerIndex
