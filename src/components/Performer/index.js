import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {Navigation} from "../"

class Performer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records:[]
    };
        this.minimize = this.minimize.bind(this)
this.expand = this.expand.bind(this)
   }

  componentDidMount() {
    function createPopup(){
        var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
        var newNode = document.createElement('div');
        newNode.classList.add('happening-now')
        newNode.classList.add('urgent')
        newNode.style.marginLeft = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        newNode.style.marginRight = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        newNode.style.marginTop = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        newNode.style.marginBottom = Math.floor(Math.random() * (50 - (-50)) + -50) + 'px';
        var innerNode = document.createElement('div');
        var textOptions = ["<h4>CRITICAL ERROR #S3X W00RK</h4><br>Your experience goes against our community guidelines. We’ve erased your experience because it goes against our Community Guidelines on nudity or sexual activity. Our Guidelines are based on our traditional upbringing and our board of directors may be too sensitive to see an illustration of an ass.", "<h4>YOUR ACCOUNT HAS BEEN RESTRICTED</h4><br>Thank you for contacting us. I reviewed your account and can see that it is currently restricted to withdrawing funds from your Cash Balance", "<h4>PROHIBITED USE</h4><br>Our Compliance Team identified your account as having sent or received gifts associated with a prohibited use case. We encourage you to find another payments provider as we cannot process future transactions for you. Going forward, any gifts sent to or from your email address will be automatically canceled.<br>Thank you for your understanding.",'<h4>'+ Math.floor(almost) + ' seconds until this platform fully self destructs</h4>']
        var text = textOptions[Math.floor(Math.random() * textOptions.length)];
        innerNode.innerHTML = "<div class='top-bar'><button onclick='this.parentNode.parentNode.parentNode.remove()'>✕</button></div><div class='inner-popup'>"+text+'<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">ok</button></div>';
        newNode.appendChild(innerNode);
        // Get the parent node
        var parentNode = document.querySelector('body');

        // Insert the new node before the reference node
        parentNode.insertBefore(newNode, parentNode.firstChild);
      }
    let unix_timestamp = 1597716180;
      let almost_unix_timestamp = 1597716000;

    var meow = setInterval(function(){ 
        let unix_timestamp = 1597716180
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        var today = new Date();   
var almost =  unix_timestamp - Math.floor(Date.now() / 1000)
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.

        if(almost < 120 && almost > 118){
          createPopup()
          setTimeout(createPopup,1000)
          setTimeout(createPopup,2000)
        }
        if(almost < 60 && almost > 78){
          createPopup()
          setTimeout(createPopup,1000)
          setTimeout(createPopup,2000)
        }
        if(almost < 30 && almost > 28){
          createPopup()
          setTimeout(createPopup,1000)
          setTimeout(createPopup,2000)
        }
         if(almost < 20 && almost > 18){
          createPopup()
          setTimeout(createPopup,1000)
          setTimeout(createPopup,2000)
          setTimeout(createPopup,4000)
          setTimeout(createPopup,5000)
        }
         if(almost < 10 && almost > 8){
          createPopup()
          setTimeout(createPopup,1000)
          setTimeout(createPopup,2000)
          setTimeout(createPopup,4000)
          setTimeout(createPopup,5000)
        }
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
    if(today > almost_date && today < date){
      var almost =  unix_timestamp - Math.floor(Date.now() / 1000)

      createPopup()
      if(Math.floor(almost) < 120){
         setTimeout(createPopup,1000)
        setTimeout(createPopup,2000)
      }else if(Math.floor(almost) < 60){
        setTimeout(createPopup,1000)
        setTimeout(createPopup,2000)
        setTimeout(createPopup,3000)
 
      }else if(Math.floor(almost) < 30){
        setTimeout(createPopup,1000)
        setTimeout(createPopup,2000)
        setTimeout(createPopup,3000)
        setTimeout(createPopup,4000)
        setTimeout(createPopup,5000)
  
        
      }else if(Math.floor(almost) < 10){
        createPopup()
        setTimeout(createPopup,1000)
        setTimeout(createPopup,2000)
        setTimeout(createPopup,3000)
        setTimeout(createPopup,4000)
        setTimeout(createPopup,5000)
        setTimeout(createPopup,1000)
        setTimeout(createPopup,1200)
       
      }



     }

   }
    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/performers?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
      .then(res => res.json())
      .then(res => {
        this.setState({ records: res.records })
      })
      .catch(error => console.log(error))
  }
  componentDidUpdate(){
    let unix_timestamp = 1597716180;
      let almost_unix_timestamp = 1597716000;
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
                          if(Math.floor(almost) < 120){
                        newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }else if(Math.floor(almost) < 60){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')


                     }else if(Math.floor(almost) < 30){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                     }else if(Math.floor(almost) < 10){
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
                           if(Math.floor(almost) < 120){
                        newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                     }else if(Math.floor(almost) < 60){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')


                     }else if(Math.floor(almost) < 30){
                      newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')
                       newtext = newtext.replace(arr[Math.floor(Math.random() * arr.length)], '⍰')

                     }else if(Math.floor(almost) < 10){
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
    var linkList = document.getElementsByClassName('link-list')[0];
    

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
  findRecord(records){

      var mew = ' ';
      for (var i = records.length - 1; i >= 0; i--) {


      if(records[i].fields.slug == this.props.match.params.id){
        mew = (
          <div className='section'>
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
              <div className='info'>
                <h1>{records[i].fields.Name}</h1>
                <ReactMarkdown className='brown-pro' source={records[i].fields.About} />
                <ReactMarkdown className='brown-pro link-list' source={records[i].fields.LinkList} />

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

     <header className="App-header performer">

     <Navigation/>
         {mycontent}
      </header>




    );
  }
}

export default withRouter(Performer)
