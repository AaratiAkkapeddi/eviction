

import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactMarkdown from "react-markdown";

class PerformerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records:[]
    };
   }

  componentDidMount() {
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

    <header className="App-header Homepage">
       <div className='performer-listings'>
         {listings}
         <br/><a id='extra-back-button-for-no-reason' href='/'>back home</a>
       </div>

    </header>




    );
  }
}

export default PerformerIndex
