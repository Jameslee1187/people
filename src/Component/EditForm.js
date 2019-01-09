import React, { Component } from 'react';

class EditForm extends Component {

  state={
    name: "",
    gender: "",

  }

  handleEditNameChange=(e)=>{
    this.setState({
      name: e.target.value
    })
  }

  handleEditGenderChange=(e)=>{
    this.setState({
      gender: e.target.value
    })
  }
  render() {
    console.log(this.props.person);
    return (
      <form onSubmit={(e)=>this.props.updatePerson(this.props.person.id,this.state, e)}>
      <input style={{"display":"inline-block", "marginLeft": "1000px"}} onChange={(e)=>this.handleEditNameChange(e)} value={this.state.name} type="text" placeholder="Name" />
      <input style={{"display":"inline-block", "marginLeft": "1000px"}} onChange={(e)=>this.handleEditGenderChange(e)}value={this.state.gender} type="text" placeholder="Gender"/>
      <button style={{"display":"inline-block", "marginLeft": "1000px"}} type="submit">Update A Person!</button>
      </form>
    );
  }

}

export default EditForm;
