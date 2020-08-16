import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {Navigation} from "../"

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records:[],
      pass: false
    };
    this.enterPass = this.enterPass.bind(this);
    this.minimize = this.minimize.bind(this)
this.expand = this.expand.bind(this)
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
      }, 1000);


 var date = new Date(unix_timestamp * 1000);
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var almost_date = new Date(almost_unix_timestamp * 1000);
    var today = new Date();   
   if(today > almost_date && today < date){
    var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
    alert(Math.floor(almost/60) + 'minutes until this platform fully self destructs')

   }
    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/pages?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
      .then(res => res.json())
      .then(res => {
        this.setState({ records: res.records })
      })
      .catch(error => console.log(error))
  }
  componentDidUpdate(){
    let unix_timestamp = 1597636800;
      let almost_unix_timestamp = 1597635000;
 var hList = document.getElementsByTagName('h1');
    if(hList){
      for (var i = hList.length - 1; i >= 0; i--) {

              //1597546800
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var almost_date = new Date(almost_unix_timestamp * 1000);
                var today = new Date();   
               if(today > almost_date){

                var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
                   if(Math.random() > 0.5){

                    var text = hList[i].textContent;
                    var arr = [new RegExp('a',"ig"), new RegExp('b',"ig"), new RegExp('c',"ig"), new RegExp('d',"ig"),new RegExp('e',"ig"),new RegExp('f',"ig"),new RegExp('g',"ig"),new RegExp('h',"ig"),new RegExp('i',"ig"),new RegExp('j',"ig"),new RegExp('k',"ig"),new RegExp('l',"ig"),new RegExp('m',"ig"),new RegExp('n',"ig"),new RegExp('o',"ig"),new RegExp('p',"ig"),new RegExp('q',"ig"),new RegExp('r',"ig"),new RegExp('s',"ig"),new RegExp('t',"ig"),new RegExp('u',"ig"),new RegExp('v',"ig"),new RegExp('w',"ig"),new RegExp('x',"ig"),new RegExp('y',"ig"),new RegExp('z',"ig")]
                    var newtext = text.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                    newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                    hList[i].textContent = newtext;
                    console.log(newtext)
                  }
              }
      }
    }

        var aList = document.getElementsByTagName('a');
    if(aList){
      for (var i = aList.length - 1; i >= 0; i--) {

              //1597546800
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var almost_date = new Date(almost_unix_timestamp * 1000);
                var today = new Date();   
               if(today > almost_date){

                var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
                   if(Math.random() > 0.5){
                    var text = aList[i].textContent;
                   var arr = [new RegExp('a',"ig"), new RegExp('b',"ig"), new RegExp('c',"ig"), new RegExp('d',"ig"),new RegExp('e',"ig"),new RegExp('f',"ig"),new RegExp('g',"ig"),new RegExp('h',"ig"),new RegExp('i',"ig"),new RegExp('j',"ig"),new RegExp('k',"ig"),new RegExp('l',"ig"),new RegExp('m',"ig"),new RegExp('n',"ig"),new RegExp('o',"ig"),new RegExp('p',"ig"),new RegExp('q',"ig"),new RegExp('r',"ig"),new RegExp('s',"ig"),new RegExp('t',"ig"),new RegExp('u',"ig"),new RegExp('v',"ig"),new RegExp('w',"ig"),new RegExp('x',"ig"),new RegExp('y',"ig"),new RegExp('z',"ig")]
                     var newtext = text.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                    newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                    aList[i].textContent = newtext;
                  }
              }
      }
    }
    var pList = document.getElementsByTagName('p');
    if(pList){
      for (var i = pList.length - 1; i >= 0; i--) {

              //1597546800
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var almost_date = new Date(almost_unix_timestamp * 1000);
                var today = new Date();   
               if(today > almost_date){

                var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
                   if(Math.random() > 0.5){
                    var text = pList[i].textContent;
                  var arr = [new RegExp('a',"ig"), new RegExp('b',"ig"), new RegExp('c',"ig"), new RegExp('d',"ig"),new RegExp('e',"ig"),new RegExp('f',"ig"),new RegExp('g',"ig"),new RegExp('h',"ig"),new RegExp('i',"ig"),new RegExp('j',"ig"),new RegExp('k',"ig"),new RegExp('l',"ig"),new RegExp('m',"ig"),new RegExp('n',"ig"),new RegExp('o',"ig"),new RegExp('p',"ig"),new RegExp('q',"ig"),new RegExp('r',"ig"),new RegExp('s',"ig"),new RegExp('t',"ig"),new RegExp('u',"ig"),new RegExp('v',"ig"),new RegExp('w',"ig"),new RegExp('x',"ig"),new RegExp('y',"ig"),new RegExp('z',"ig")]
                      var newtext = text.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                    newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                    pList[i].textContent = newtext;
                  }
              }
      }
    }
        var imgList = document.getElementsByTagName('img');
    if(imgList){
      for (var i = 0; i < imgList.length; i++) {

              //1597546800
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var almost_date = new Date(almost_unix_timestamp * 1000);
                var today = new Date();   
               if(today > almost_date){

                var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
                   if(Math.random() > 0.5){
                    imgList[i].src='fdsfds'

               }

         }

      }

    }
var linkList = document.getElementsByClassName('info')[0];


    if(linkList){
       var otherlinks = linkList.getElementsByTagName('a')
    for (var i = 0; i < otherlinks.length; i++) {

         otherlinks[i].target = "_blank";

          // Create a new JavaScript Date object based on the timestamp
          // multiplied by 1000 so that the argument is in milliseconds, not seconds.
          var almost_date = new Date(almost_unix_timestamp * 1000);
          var today = new Date();   
         if(today > almost_date){
          var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
             if(Math.random() > 0.5){
          otherlinks[i].href = '/oops'
         }
         }
    }
  }
  }
  minimize(){
    var el = document.getElementsByClassName('happening-now')[0];
    el.classList.add('closed')
  }
  expand(){
    var el = document.getElementsByClassName('happening-now')[0];
    el.classList.remove('closed')
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
                  <div className='image happening-now'>
                  <div className='top-bar'>
        <button onClick={this.minimize}>✕</button>
        <button onClick={this.expand}>+</button>

       </div>
                <div className='inner-popup'>
                {records[i].fields.Image ? 
                  records[i].fields.Image.map((j,i)=>{
                    return(
                    <img src={j.url}/>
                    )
                  })
                  
                : "" }

                </div>
              </div>
              <div className='info brown-pro'>
              <ReactMarkdown source={records[i].fields.Info} />

              </div>
          
              </div>
              : "" }
            </div>
          )
         }else{
        mew = (
          <div>

            <div className='image happening-now'>
            <div className='top-bar'>
        <button onClick={this.minimize}>✕</button>
        <button onClick={this.expand}>+</button>

       </div>
            <div className='inner-popup'>
                {records[i].fields.Image ? 
                  <img src={records[i].fields.Image[0].url}/>
                : "" }
                </div>
              </div>
              <div className='info brown-pro'>
              <h1>{records[i].fields.Title}</h1>
              <ReactMarkdown source={records[i].fields.Info} />
              
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
     <Navigation/>
     <a id='extra-back-button-for-no-reason' href='/'>↩ back to listings</a>
         {mycontent}

      </header>




    );
  }
}

export default withRouter(Page)
