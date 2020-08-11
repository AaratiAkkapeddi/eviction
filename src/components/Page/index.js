import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import ReactMarkdown from "react-markdown";


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records:[],
      pass: false
    };
    this.enterPass = this.enterPass.bind(this);
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

    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/pages?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
      .then(res => res.json())
      .then(res => {
        this.setState({ records: res.records })
      })
      .catch(error => console.log(error))
  }
  componentDidUpdate(){
var linkList = document.getElementsByClassName('info')[0];


    if(linkList){
       var otherlinks = linkList.getElementsByTagName('a')
    for (var i = 0; i < otherlinks.length; i++) {

         otherlinks[i].target = "_blank";
     
    }
  }
  }

  enterPass(event, correct){

    if(event.target.value == correct){

      console.log('woo')
      this.setState({pass: true})
    }
  }

  findRecord(records, pass){

      var mew = ' ';

      for (var i = records.length - 1; i >= 0; i--) {


        if(records[i].fields.slug == this.props.match.params.id){
          var password = records[i].fields.Password
          document.getElementsByTagName('body')[0].style.backgroundColor = records[i].fields.PageBackgroundColor

         if(records[i].fields.IsPasswordProtected){
            mew = (
     
            <div className='pass-protected'>
               {!pass ? 
                <div className='form'>
              <h1>Enter Password</h1>
              <input className='pass' onChange={(e) => {
                     this.enterPass(e, password)
                }}/>
                </div>
                :"" }
            {pass ? 
              <div>
              <div className='info brown-pro'>
              <ReactMarkdown source={records[i].fields.Info} />
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
              : "" }
            </div>
          )
         }else{
        mew = (
          <div>
              <div className='info brown-pro'>
              <h1>{records[i].fields.Title}</h1>
              <ReactMarkdown source={records[i].fields.Info} />
              <a id='extra-back-button-for-no-reason' href='/'>↩ back home</a>
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
      }
      return(
        mew
        )
    
   }
   render() {


    const {records, pass} = this.state
    const mycontent = this.findRecord(records, pass)
    return (

     <header className="App-header happening">
         {mycontent}

      </header>




    );
  }
}

export default withRouter(Page)
