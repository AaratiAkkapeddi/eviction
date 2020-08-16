import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {Navigation} from "../"

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: [],
    };

   }
    componentDidMount() {

      let unix_timestamp = 1597636800;
      let almost_unix_timestamp = 1597635000;
      var meow = setInterval(function(){ 
        let unix_timestamp = 1597636800;
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

	    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/introduction?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
	      .then(res => res.json())
	      .then(res => {
	        this.setState({ about: res.records })
	      })
	      .catch(error => console.log(error))
	  }
      componentDidUpdate(){
        let unix_timestamp = 1597636800;
      let almost_unix_timestamp = 1597635000;
                    var hList = document.getElementsByTagName('h2');
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


                    pList[i].textContent = newtext;
                  }
              }
      }
    }
            var imgList = document.getElementsByTagName('img');
    if(imgList){
      for (var i = 0; i < imgList.length; i++) {

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
var linkList = document.getElementsByClassName('about')[0];
    

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

   render() {
   	const {about} = this.state;

    return (

    <header className="App-header About">
      <Navigation/>
       { about.length > 0 ? 
       <div className='about section'>
         <ReactMarkdown source={about[0].fields.About} />
       </div>
       :""
   		}
    </header>




    );
  }
}

export default About
