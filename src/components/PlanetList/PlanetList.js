import React, { Component } from 'react';
import axios from 'axios';




class PlanetList extends Component {

  render() {
    return (
      <div>
  {JSON.stringify(this.state.planetList)}
  <ul>
    {this.props.planetList.map(planet =><li key={planet.name}>{planet.name}</li>)}
    </ul>
            {/* <PlanetList /> */}
      </div>
    );
  }
}

export default PlanetList;
