

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
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
            if(!links[i].download){
         links[i].target = "_blank";
     }
    }
  }
   render() {
    const {records} = this.state;

  const listings = records.length > 0 ? records.map((x,i)=>{
    return(
      <a key={x.id} className="listing" href={"/performer/"+ x.fields.slug}>{x.fields.Name}</a>
    )
    
  }) : 'loading'



    return (

    <header className="App-header Homepage">
       <div className='listings'>
         {listings}
       </div>
    </header>




    );
  }
}

export default PerformerIndex
