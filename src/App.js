import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  RouteComponentProps,
  useParams
} from "react-router-dom";
import './App.css';
import {Home, Page, Navigation, Performer, PerformerIndex, About,Livestream, Destruction} from './components'
const NoMatchPage = () => {
  return (
    <div>
      <Navigation></Navigation>
      <h3 className='oops-message text-large'>404: uh oh! You are searching for substance in a place where there's ultimately nothing at all. Use the empty space below to project your fantasies, or click here to return to the party. <a className='link' href='/'>Return</a>?</h3>
    </div>
  );
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        err : null,
        isLoaded : false,
        records: [],
        info:[],
    };
    
  }
  componentDidMount() {
    let mew = [];
      fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/listings?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {

          mew =  res.records 
        }).then(() => {
      fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/listings?offset=itryBJDkcGDX29lwo/reccr835Vro5xcXTQ&api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          mew = mew.concat(res.records)
          this.setState({ records: mew })
        })

        }).catch(error => console.log(error))
        

  }


render() {
  const { records,info, cherry } = this.state;

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Destruction/>
        </Route>
        <Route exact path="/listings">
          <Home records={records}/>
        </Route>
         <Route exact path="/pageover/:id">
         
          <Page/>
        </Route>
        <Route exact path="/performer/:id">

          <Performer/>
        </Route>
        <Route exact path="/performer-index">

          <PerformerIndex/>
        </Route>
        <Route exact path="/livestream">
          <Livestream/>
        </Route>
        <Route exact path="/destruction">
          <Destruction/>
        </Route>
        <Route exact path="/about">

       <Destruction/>
        </Route>
        <Route component={NoMatchPage} />
      </Switch>
    </div>
    </Router>
  );
}

}

export default App;
