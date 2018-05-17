import React, { Component } from 'react';
import axios from 'axios';
import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';
// import PlanetList from '../PlanetList/PlanetList';


const emptyStar = {
  name: '', 
  diameter: '',
 };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  //     starList: emptyStar,
  //   }
  // }
      newStar: {
      name: '',
      diameter: ''},

      starList: [{name: 'Menkar', diameter: '117 million'}, {name: 'Kochab', diameter: '120 million'}, {name: 'Hadar', diameter: '50 million'}],
      newStar: emptyStar,
      planetList: []
    }
  }

  // handleNameChange = (event) => {
  //   this.setState({
  //     newStar: {
  //       ...this.state.newStar,
  //       name: event.target.value,
  //     }
  //   })
  // }

  // handleDiameterChange = (event) => {
  //   this.setState({
  //     newStar: {
  //       ...this.state.newStar,
  //       diameter: event.target.value,
  //     }
  //   })
  // }
  
  // handleClick = (event) => {
  //   event.preventDefault();
  //   this.setState({ 
  //     starList: [
  //       ...this.state.starList, 
  //     this.state.newStar,
  //     ]
  //   });
  // }

  handleChangeFor = (propertyName) => event => {
    console.log(event.target.value);
    this.setState({ 
      newStar: {
        ...this.state.newStar, 
      [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.starList);
    this.setState({
    starList: [...this.state.starList, this.state.newStar],
  });
  }

  componentDidMount() {
    this.getPlanets('https://swapi.co/api/planets/?format=json');}
    
    getPlanets = (nextUrl) => {
      if(nextUrl){
    axios({
    method: 'GET',
    url: nextUrl,
  })
    .then(response => {
      console.log(response);
      this.setState({
        planetList:
        [...this.state.planetList,
      ...response.data.results]
      });
      if (response.data.next) {
        this.getPlanets(response.data.next);
      }
  })
  }
}

  render() {
    // let starListItemArray = [];
    //for loop
    // for (let i = 0; i < this.state.starList.length; i++) {
    //   let starName = this.state.starList[i]
    //   starListItemArray.push(<li key={starName}>{starName}</li>);
    // }

    //for each loop
    // this.state.starList.forEach(function(starName) {
    //   starListItemArray.push(<li key={starName}>{starName}</li>);
    // });

    //map

    // const starListItemArray = this.state.starList.map(function(starName) {
    //   return (<li key={starName}>{starName}</li>);
    // });

    //es6
    // const starListItemArray = this.state.starList.map(starName => {
    //   return (<li key={starName}>{starName}</li>);
    // });
//shorter
    

// const starListItemArray = this.state.starList.map(starName => (<li key={starName.name}>The star {starName.name} is {starName.diameter} km in diameter</li>));


    return (
      <div>
        <Introduction />
  <NewStar newStar={this.state.newStar}/>
 
            <NewStarForm newStar={this.state.newStar} handleChangeForChild={this.handleChangeFor} handleSubmitChild={this.handleSubmit}/>
            <StarList starList={this.state.starList} />
            <PlanetList planetList={this.state.starList} />
      </div>
    );
  }
}

export default App;
