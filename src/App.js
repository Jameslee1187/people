import React, { Component, Fragment } from 'react';
import Favorite from './Component/Favorite'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PeopleContainer from './Container/PeopleContainer'
import './App.css';

class App extends Component {
  state={
    favorite:[]
  }

  addFavorite=(person)=>{
    console.log('hello', person)
    this.setState({
      favorite: [...this.state.favorite, person]
    }, console.log(this.state.favorite))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" render={()=> <PeopleContainer addFavorite={this.addFavorite}/>}/>
            <Route path="/favorite" render={()=> <Favorite favorite={this.state.favorite} />}/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
