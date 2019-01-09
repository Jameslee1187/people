import React, { Component } from 'react';

class CreatePeople extends Component {

  state={
    name: "",
    gender: ""
  }


  handleNameInput=(e)=>{
    this.setState({
      name: e.target.value
    })
  }

  handleGenderInput=(e)=>{
    this.setState({
      gender: e.target.value
    })
  }

  saveCreatedPerson=(e)=>{
    e.preventDefault()
    let newPerson = {
      name: this.state.name,
      gender: this.state.gender
    }

    fetch("http://localhost:3000/people/",{
      method: 'POST',
      body: JSON.stringify(newPerson),
      headers:{
        'Content-Type': 'application/json'
      }
  })
    .then(res => res.json())
    .then(newPerson => {
      this.props.updatePeopleArray(newPerson)
    })


  }

  render() {
    return (
      <form onSubmit={(e)=> this.saveCreatedPerson(e)}>
      <input onChange={(e)=> this.handleNameInput(e)}type="text" placeholder="Name" value={this.state.name}/>
      <input onChange={(e)=> this.handleGenderInput(e)}type="text" placeholder="Gender" value={this.state.gender}/>
      <button type="submit">Create A Person!</button>

      </form>
    );
  }

}

export default CreatePeople;
