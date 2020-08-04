import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import ReactMarkdown from "react-markdown";


class Performer extends Component {
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

  findRecord(records){

      var mew = ' ';
      for (var i = records.length - 1; i >= 0; i--) {


      if(records[i].fields.slug == this.props.match.params.id){
        mew = (
          <div>
              <h1 className='title'>{records[i].fields.Name}</h1>
              <div className='info'>
                <ReactMarkdown source={records[i].fields.About} />
              </div>
              <div className='image'>
                {records[i].fields.Image ? 
                  <img src={records[i].fields.Image[0].url}/>
                : "" }
              </div>
              
            </div>
            
          )
         
         
        }
      }
      return(
        mew
        )
    
   }
   render() {


    const {records} = this.state
    const mycontent = this.findRecord(records)
    return (

     <header className="App-header">
         {mycontent}
      </header>




    );
  }
}

export default withRouter(Performer)
