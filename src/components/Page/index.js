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
    let destruction = 1597975200;
      let unix_timestamp = destruction - 900;//when redirect happens
      let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
      /* DECAY POPUP GENERATOR */
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
       /* END DECAY POPUP GENERATOR */
    /* INTERVAL */
    var meow = setInterval(function(){ 
        let destruction = 1597975200;
        let unix_timestamp = destruction - 900;//when redirect happens
        let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        var today = new Date();   
        var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
/* DECAY POPUPS */
        // createPopup()
        // setTimeout(createPopup,1000)
        // setTimeout(createPopup,2000)

        // if(almost < 120 && almost > 118){
        //   createPopup()
        //   setTimeout(createPopup,1000)
        //   setTimeout(createPopup,2000)
        // }
        // if(almost < 60 && almost > 780){
        //   createPopup()
        //   setTimeout(createPopup,1000)
        //   setTimeout(createPopup,2000)
        // }



      /* REDIRECT */
       if(today >= date){
        clearInterval(meow)
        window.location.href = '/livestream'

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

        // createPopup()
        // setTimeout(createPopup,3000)
        // setTimeout(createPopup,8000)
 var meow2 = setInterval(function(){ 
          let destruction = 1597975200;
          let unix_timestamp = destruction - 900;//when redirect happens
          let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
          var almost =  destruction - Math.floor(Date.now() / 1000)
          // Create a new JavaScript Date object based on the timestamp
          // multiplied by 1000 so that the argument is in milliseconds, not seconds.
          var date = new Date(unix_timestamp * 1000);
          var today = new Date();   
      
    /* DECAY POPUPS */

  

        /* REDIRECT */
         if(almost <= 0 ){
          clearInterval(meow2);

         }

          if(almost < 900 ){
            createPopup()
            setTimeout(createPopup,15000)
            setTimeout(createPopup,15000 * 2)
            setTimeout(createPopup,15000 * 3)
            setTimeout(createPopup,15000 * 4)
            setTimeout(createPopup,15000 * 5)
            setTimeout(createPopup,15000 * 6)
            setTimeout(createPopup,15000 * 7)
            setTimeout(createPopup,15000 * 8)
            setTimeout(createPopup,15000 * 9)
            setTimeout(createPopup,15000 * 10)
            setTimeout(createPopup,15000 * 11)
            setTimeout(createPopup,15000 * 12)
            setTimeout(createPopup,15000 * 13)
            setTimeout(createPopup,15000 * 14)
            setTimeout(createPopup,15000 * 15)
            setTimeout(createPopup,15000 * 16)
            setTimeout(createPopup,15000 * 17)
            setTimeout(createPopup,15000 * 18)
            setTimeout(createPopup,15000 * 19)
            setTimeout(createPopup,15000 * 20)

          }else if(almost < 300 ){
            createPopup()
            setTimeout(createPopup,3000)
            setTimeout(createPopup,3000 * 2)
            setTimeout(createPopup,3000 * 3)
            setTimeout(createPopup,3000 * 4)
            setTimeout(createPopup,3000 * 5)
            setTimeout(createPopup,3000 * 6)
            setTimeout(createPopup,3000 * 7)
            setTimeout(createPopup,3000 * 8)
            setTimeout(createPopup,3000 * 9)
            setTimeout(createPopup,3000 * 10)
            setTimeout(createPopup,3000 * 11)
            setTimeout(createPopup,3000 * 12)
            setTimeout(createPopup,3000 * 13)
            setTimeout(createPopup,3000 * 14)
            setTimeout(createPopup,3000 * 15)
            setTimeout(createPopup,3000 * 16)
            setTimeout(createPopup,3000 * 17)
            setTimeout(createPopup,3000 * 18)
            setTimeout(createPopup,3000 * 19)
            setTimeout(createPopup,3000 * 20)
          }else{
            createPopup()
          }


        }, 60000);

      // if(Math.floor(almost) < 120){
      //    setTimeout(createPopup,1000)
      //   setTimeout(createPopup,2000)
      // }else if(Math.floor(almost) < 60){
      //   setTimeout(createPopup,1000)
      //   setTimeout(createPopup,2000)
      //   setTimeout(createPopup,3000)
      // }




     }

   }
    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/pages?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
      .then(res => res.json())
      .then(res => {
        this.setState({ records: res.records })
      })
      .catch(error => console.log(error))
  }
  componentDidUpdate(){
    let destruction = 1597975200;
      let unix_timestamp = destruction - 900;//when redirect happens
      let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens

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
                        if(Math.floor(almost) < 1200){
                        newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }else if(Math.floor(almost) < 600){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')


                     }else if(Math.floor(almost) < 300){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                     }else if(Math.floor(almost) < 100){
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }

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
                        if(Math.floor(almost) < 1200){
                        newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }else if(Math.floor(almost) < 600){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')


                     }else if(Math.floor(almost) < 300){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                     }else if(Math.floor(almost) < 100){
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }

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
                        if(Math.floor(almost) < 1200){
                        newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }else if(Math.floor(almost) < 600){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')


                     }else if(Math.floor(almost) < 300){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                     }else if(Math.floor(almost) < 100){
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }

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
                      {records[i].fields.Image ? 
          <div>

            <div className='image happening-now'>
            <div className='top-bar'>
        <button onClick={this.minimize}>✕</button>
        <button onClick={this.expand}>+</button>

       </div>
            <div className='inner-popup'>
      
                  <img src={records[i].fields.Image[0].url}/>
               
                </div>
              </div>
              
            
             
            </div>

            : "" }
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
