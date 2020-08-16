

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
      records:[]
    };
   }

  componentDidMount() {
    let unix_timestamp = 1597636800;
      let almost_unix_timestamp = 1597635000;
    var meow = setInterval(function(){ 
        let unix_timestamp = 1597636800
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        var today = new Date();   

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
    alert(Math.floor(almost/60) + 'minutes until this platform fully self destructs')

   }
    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/performers?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
      .then(res => res.json())
      .then(res => {
        this.setState({ records: res.records })
      })
      .catch(error => console.log(error))
  }
  componentDidUpdate(){

  }
   render() {
    const {records} = this.state;

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
       </div>

    </header>




    );
  }
}

export default PerformerIndex
