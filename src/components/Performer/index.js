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

    var meow = setInterval(function(){ 
        let unix_timestamp = 1597204800
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        var today = new Date();   

       if(today >= date){
        clearInterval(meow)
        window.location.href = '/'

       }
      }, 1000);

    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/performers?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
      .then(res => res.json())
      .then(res => {
        this.setState({ records: res.records })
      })
      .catch(error => console.log(error))
  }
  componentDidUpdate(){

    var linkList = document.getElementsByClassName('link-list')[0];
    

    if(linkList){
      var otherlinks = linkList.getElementsByTagName('a')
    for (var i = 0; i < otherlinks.length; i++) {

         otherlinks[i].target = "_blank";
     
    }
  }

  }
  findRecord(records){

      var mew = ' ';
      for (var i = records.length - 1; i >= 0; i--) {


      if(records[i].fields.slug == this.props.match.params.id){
        mew = (
          <div className='section'>
              
              <div className='info'>
                <h1>{records[i].fields.Name}</h1>
                <ReactMarkdown className='brown-pro' source={records[i].fields.About} />
                <ReactMarkdown className='brown-pro link-list' source={records[i].fields.LinkList} />
                <a id='extra-back-button-for-no-reason' href='/'>↩ back home</a>
              </div>
              <div className='image'>
                {records[i].fields.Image ? 
                  records[i].fields.Image.map((j,i)=>{
                    return(
                    <img src={j.url}/>
                    )
                  })
                  
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
