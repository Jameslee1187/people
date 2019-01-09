import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Favorite from '../Component/Favorite'

import PeopleList from '../Component/PeopleList'
import CreatePeople from '../Component/CreatePeople'
class PeopleContainer extends Component {

  state={
    people: [],
  }


  componentDidMount(){
    fetch("http://localhost:3000/people/")
    .then(res=>res.json())
    .then(people=>{
      this.setState({
        people: people
      })
    })
  }


  updatePeopleArray=(newPerson)=>{
    let newArr = [...this.state.people, newPerson]
    this.setState({
      people: newArr
    })
  }

  deletePerson=(clickedPerson)=>{
    fetch(`http://localhost:3000/people/${clickedPerson.id}`,
      {
        method: 'delete'
      })
      .then(response => response.json())

    let deletePerson = this.state.people.filter(person=>{
      return person.name !== clickedPerson.name
    })
    console.log(deletePerson);
    this.setState({
      people: deletePerson
    })
  }

  updatePerson=(id,clickedPerson, e)=>{console.log(clickedPerson);
    e.preventDefault()
    let newPeople = [...this.state.people]
    let person = newPeople.filter(person => person.id === id)[0]
    let idx = newPeople.indexOf(person)
    newPeople[idx] = clickedPerson
    fetch(`http://localhost:3000/people/${id}`,
      {
        method: 'PATCH',
        headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: clickedPerson.name,
      gender: clickedPerson.gender
    })
  })
    this.setState({
      people: newPeople
    })
  }



  render() {
    return (
      <div>
      <CreatePeople updatePeopleArray={this.updatePeopleArray}/>
      <PeopleList people={this.state.people} deletePerson={this.deletePerson} updatePerson={this.updatePerson} addFavorite={this.props.addFavorite}/>
      </div>
    );
  }

}

export default PeopleContainer;
