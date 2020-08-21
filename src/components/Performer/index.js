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
    let destruction = 1598068799;
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
        var textOptions = ['<h4>!!! WARNING !!!</h4><br>you\'re almost there, just a little bit further<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">keep going</button>', '<h4>WHAT\'S WRONG, SWEETIE?</h4><br>you\'re not giving up now, are you?<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">keep looking</button>', '<h4>UPDATE</h4><br>there\'s more to be found if you know where to look<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">keep looking</button>', '<h4>ALMOST THERE</h4><br>so close you can almost taste it.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">ok</button>', '<h4>SATISFACTION THIS WAY</h4><br>you want to feel good, don\'t<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">let me cum</button>', '<h4>Unveil the Veil</h4><br> The reveal is in the hiding. The hiding works to reveal. <br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">unveil us</button>', '<h4>Keep Looking</h4><br>we\'ll make it worth your while, darling<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">find it</button>', '<h4>U WANT A$$</h4><br>"A$$ / B00BIES / CH@0S if you know where to look"<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">look for us</button>', '<h4>s0 cl0s3</h4><br>you haven\'t gotten what you came here for, sweetie.<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">get it before it\'s gone</button>', '<h4>cum on be a good boy</h4><br>be a good boy and sniff us out<br><button onclick="this.parentNode.parentNode.parentNode.remove()" class="ok">sniff sniff</button>']
        var text = textOptions[Math.floor(Math.random() * textOptions.length)];
        innerNode.innerHTML = "<div class='top-bar'><button onclick='this.parentNode.parentNode.parentNode.remove()'>✕</button></div><div class='inner-popup'>"+text+'</div>';
        newNode.appendChild(innerNode);
        // Get the parent node
        var parentNode = document.querySelector('body');

        // Insert the new node before the reference node
        parentNode.insertBefore(newNode, parentNode.firstChild);
      }
    /* END DECAY POPUP GENERATOR */
    /* INTERVAL */
    var meow = setInterval(function(){ 
        let destruction = 1598068799;
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
        // setTimeout(createPopup,4000)
        // setTimeout(createPopup,10000)
         var meow2 = setInterval(function(){ 
          let destruction = 1598068799;
          let unix_timestamp = destruction - 900;//when redirect happens
          let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
          var almost =  destruction - Math.floor(Date.now() / 1000)
          // Create a new JavaScript Date object based on the timestamp
          // multiplied by 1000 so that the argument is in milliseconds, not seconds.
          var date = new Date(unix_timestamp * 1000);
          var today = new Date();   
      
    /* DECAY POPUPS */

  /******/
          var almost =  destruction - Math.floor(Date.now() / 1000)
          // Create a new JavaScript Date object based on the timestamp
          // multiplied by 1000 so that the argument is in milliseconds, not seconds.
          var date = new Date(unix_timestamp * 1000);
          var today = new Date();   
           if(almost < 900 ){
            createPopup()
            setTimeout(createPopup,15000)
            setTimeout(createPopup,15000 * 2)
            setTimeout(createPopup,15000 * 3)
            setTimeout(createPopup,15000 * 4)


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

          }else{
            // createPopup()
          }
 /******/ 

        /* REDIRECT */
         // if(almost <= 0 ){
         //  clearInterval(meow2);

         // }

          if(almost < 900 ){
            createPopup()
            setTimeout(createPopup,15000)
            setTimeout(createPopup,15000 * 2)
            setTimeout(createPopup,15000 * 3)
            setTimeout(createPopup,15000 * 4)


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

          }else{
            // createPopup()
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
    fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/performers?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
      .then(res => res.json())
      .then(res => {
        this.setState({ records: res.records })
      })
      .catch(error => console.log(error))
  }
  componentDidUpdate(){
    let destruction = 1598068799;
      let unix_timestamp = destruction - 900;//when redirect happens
      let almost_unix_timestamp = unix_timestamp - 900;//when decay starts to happens
    
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
