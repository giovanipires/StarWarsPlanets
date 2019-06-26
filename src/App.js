import React, { Component } from 'react';
import Card from './components/Card';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      planets: [],
    }

    this.getPlanets = this.getPlanets.bind(this)
  }

  getRandomPlanet(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //HOJE ESTA LIMITADO AO MIN E MAX APRESENTADO
  //COLOCAR TODOS OS PLANETAS EM LOCALSTORAGE?
  //FAZER CONSULTA POR TODOS OS PLANETAS? E A LIMITAÇÃO E PAGINAÇÃO?

  getPlanets() {
    let random = this.getRandomPlanet(1, 61);
    console.log(random);
    
    return axios.get("https://swapi.co/api/planets/" + random + "/")
    .then((response) => {
      // console.log(response.data);
      this.setState( { planets: response.data })
    });
  }

  componentDidMount(){
    this.getPlanets()
  }

  render() {
    const {planets} = this.state;
    return(
      <div className="App">
        <Card planets = { planets } />
        <br></br>
        <button onClick={this.getPlanets} className="btn btn-warning"><strong>Next</strong></button>
      </div>
    );
  }
}

export default App;
