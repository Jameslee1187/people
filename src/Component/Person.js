import React, { Component } from 'react';
import EditForm from './EditForm'
import Favorite from './Favorite'
import {Link} from 'react-router-dom'
class Person extends Component {

  state={
    toggle: false
  }


  toggleUpdateButton=()=>{
    this.setState({
      toggle: !this.state.toggle
    })
  }

  showEditForm=()=>{
    if(this.state.toggle === true){
      return <EditForm person={this.props.person} updatePerson={this.props.updatePerson}/>
    }
  }



  render() {


    return (
      <div>
        <div style={{"display":"inline-block"}}>{this.props.person.name}</div>
        <div style={{"display":"inline-block", "marginLeft": "10px"}}>{this.props.person.gender}</div>
        <button onClick={()=>this.props.deletePerson(this.props.person)} style={{"display":"inline-block", "marginLeft": "10px"}}>Delete Me!</button>
        <button onClick={()=>this.toggleUpdateButton()} style={{"display":"inline-block", "marginLeft": "10px"}}>Update Me!</button>
        {this.showEditForm()}
        <Link to='/favorite'>
        <button onClick={()=> this.props.addFavorite(this.props.person)}style={{"display":"inline-block", "marginLeft": "10px"}}type="submit">Send Me To Favorites!</button>

        </Link>
      </div>
    )
  }

}

export default Person;
