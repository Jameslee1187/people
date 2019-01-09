import React, { Component } from 'react';
import Person from './Person'

class PeopleList extends Component {

  render() {
    let people= this.props.people.map(person=>{
      return <Person key = {person.id} person={person} deletePerson={this.props.deletePerson} updatePerson={this.props.updatePerson} addFavorite={this.props.addFavorite}/>
    })
    return (
      <div>
        {people}
      </div>
    );
  }

}

export default PeopleList;
