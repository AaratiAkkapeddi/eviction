

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
    let unix_timestamp = 1597802422;
      let almost_unix_timestamp = 1597802220;
    var meow = setInterval(function(){ 
        let unix_timestamp = 1597802422
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        var today = new Date();   
var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.

        if(almost < 120 && almost > 118){
          createPopup()
          setTimeout(createPopup,1000)
          setTimeout(createPopup,2000)
        }
        if(almost < 60 && almost > 78){
          createPopup()
          setTimeout(createPopup,1000)
          setTimeout(createPopup,2000)
        }
        if(almost < 30 && almost > 28){
          createPopup()
          setTimeout(createPopup,1000)
          setTimeout(createPopup,2000)
        }
         if(almost < 20 && almost > 18){
          createPopup()
          setTimeout(createPopup,1000)
          setTimeout(createPopup,2000)
          setTimeout(createPopup,4000)
          setTimeout(createPopup,5000)
        }
         if(almost < 10 && almost > 8){
          createPopup()
          setTimeout(createPopup,1000)
          setTimeout(createPopup,2000)
          setTimeout(createPopup,4000)
          setTimeout(createPopup,5000)
        }
       if(today >= date){
        clearInterval(meow)
        window.location.href = '/'

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
