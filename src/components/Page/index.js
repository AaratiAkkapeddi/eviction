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
      records:[]
    };
   }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/pages?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
      .then(res => res.json())
      .then(res => {
        this.setState({ records: res.records })
      })
      .catch(error => console.log(error))
  }

  findRecord(records){

      var mew = ' ';
      for (var i = records.length - 1; i >= 0; i--) {
        console.log(records[i].fields.slug)
        console.log(this.props.match.params.id)

        if(records[i].fields.slug == this.props.match.params.id){
          document.getElementsByTagName('body')[0].style.backgroundColor = records[i].fields.PageBackgroundColor

         if(records[i].fields.IsPasswordProtected){
            mew = (
        
            <div className='pass-protected'>
              <input className='pass'/>
              <div class='info'>
              <ReactMarkdown source={records[i].fields.Info} />
              </div>
              <div class='image'>

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
         }else{
        mew = (
          <div>
              <div class='info'>
              <ReactMarkdown source={records[i].fields.Info} />
              </div>
              <div class='image'>
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


    const {records} = this.state
    const mycontent = this.findRecord(records)
    return (

     <header className="App-header happening">
         {mycontent}
      </header>




    );
  }
}

export default withRouter(Page)
