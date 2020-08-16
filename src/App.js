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
import {Home, Page, Navigation, Performer, PerformerIndex, About} from './components'
const NoMatchPage = () => {
  return (
    <div>
      <Navigation></Navigation>
      <h3 className='oops-message text-large'>404 Woops! This page does not exist. Maybe try going <a className='link' href='/'>Home</a>?</h3>
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
      fetch('https://api.airtable.com/v0/appJMAGbmLf1f7DeS/listings?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {

          this.setState({ records: res.records })
        })
        .catch(error => console.log(error))

  }


render() {
  const { records,info, cherry } = this.state;

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home info={info} records={records}/>
        </Route>
         <Route exact path="/page/:id">
         
          <Page/>
        </Route>
        <Route exact path="/performer/:id">

          <Performer/>
        </Route>
        <Route exact path="/performer-index">

          <PerformerIndex/>
        </Route>
        <Route exact path="/about">

          <About/>
        </Route>
        <Route component={NoMatchPage} />
      </Switch>
    </div>
    </Router>
  );
}

}

export default App;
