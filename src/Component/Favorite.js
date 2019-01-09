import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Favorite extends Component {

  render() {
    let showFavs = this.props.favorite.map(fav=>{
      return <h3>{fav.name}</h3>
    })

    return (
      <div>
        <div>{showFavs}</div>
        <Link to='/'>
          <button>go back</button>
        </Link>
      </div>
    );
  }

}

export default Favorite;
